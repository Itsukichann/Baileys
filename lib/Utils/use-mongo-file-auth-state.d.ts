import { AuthenticationState } from '../Types'

export declare const useMongoFileAuthState: (collection: string) => Promise<{
    state: AuthenticationState
    saveCreds: () => Promise<void>
}>