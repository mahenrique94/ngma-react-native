import SyncStorage from 'sync-storage'

const TOKEN_KEY = 'NGMAHerbalifeToken'

const getToken = () => SyncStorage.get(TOKEN_KEY)
const isLogged = () => !!getToken()
const removeToken = () => SyncStorage.remove(TOKEN_KEY)
const setToken = token => SyncStorage.set(TOKEN_KEY, token)

export { getToken, isLogged, removeToken, setToken }
