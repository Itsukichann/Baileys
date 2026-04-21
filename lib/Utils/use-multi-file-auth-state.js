"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    Mutex
} = require("async-mutex")
const {
    promises
} = require("fs")
const {
    join
} = require("path")
const {
    proto
} = require("../../WAProto")
const {
    initAuthCreds
} = require("./auth-utils")
const {
    BufferJSON
} = require("./generics")
// We need to lock files due to the fact that we are using async functions to read and write files
// https://github.com/WhiskeySockets/Baileys/issues/794
// https://github.com/nodejs/node/issues/26338
// Use a Map to store mutexes for each file path
const fileLocks = new Map()

// Get or create a mutex for a specific file path
const getFileLock = (path) => {
    let mutex = fileLocks.get(path)
    if (!mutex) {
        mutex = new Mutex()
        fileLocks.set(path, mutex)
    }

    return mutex
}

/**
 * stores the full authentication state in a single folder.
 * Far more efficient than singlefileauthstate
 *
 * Again, I wouldn't endorse this for any production level use other than perhaps a bot.
 * Would recommend writing an auth state for use with a proper SQL or No-SQL DB
 * */
const useMultiFileAuthState = async (folder) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const writeData = async (data, file) => {
        const filePath = join(folder, fixFileName(file))
        const mutex = getFileLock(filePath)
        return mutex.acquire().then(async (release) => {
            try {
                await promises.writeFile(filePath, JSON.stringify(data, BufferJSON.replacer))
            } finally {
                release()
            }
        })
    }
    const readData = async (file) => {
        try {
            const filePath = join(folder, fixFileName(file))
            const mutex = getFileLock(filePath)
            const data = await mutex.acquire().then(async (release) => {
                try {
                    return await promises.readFile(filePath, {
                        encoding: 'utf-8'
                    })
                } finally {
                    release()
                }
            })

            return JSON.parse(data, BufferJSON.reviver)
        } catch (error) {
            return null
        }
    }
    const removeData = async (file) => {
        try {
            const filePath = join(folder, fixFileName(file))
            const mutex = getFileLock(filePath)
            await mutex.acquire().then(async (release) => {
                try {
                    await promises.unlink(filePath)
                } finally {
                    release()
                }
            })
        } catch {}
    }
    const folderInfo = await promises.stat(folder).catch(() => {})
    if (folderInfo) {
        if (!folderInfo.isDirectory()) {
            throw new Error(`found something that is not a directory at ${folder}, either delete it or specify a different location`)
        }
    } else {
        await promises.mkdir(folder, {
            recursive: true
        })
    }
    const fixFileName = (file) => {
        return file?.replace(/\//g, '__')?.replace(/:/g, '-')
    }
    const creds = await readData('creds.json') || initAuthCreds()
    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {}
                    await Promise.all(ids.map(async (id) => {
                        let value = await readData(`${type}-${id}.json`)
                        if (type === 'app-state-sync-key' && value) {
                            value = proto.Message.AppStateSyncKeyData.fromObject(value)
                        }
                        data[id] = value
                    }))
                    return data
                },
                set: async (data) => {
                    const tasks = []
                    for (const category in data) {
                        for (const id in data[category]) {
                            const value = data[category][id]
                            const file = `${category}-${id}.json`
                            tasks.push(value ? writeData(value, file) : removeData(file))
                        }
                    }
                    await Promise.all(tasks)
                }
            }
        },
        saveCreds: async () => {
            return writeData(creds, 'creds.json')
        }
    }
}

module.exports = {
    useMultiFileAuthState
}