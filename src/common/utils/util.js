/**localStorage 存入 */
export function setLocalStorage(key, val) {
    window.localStorage.setItem(key, val)
}
/** localStorage 取出 */
export function getLocalStorage(key) {
    return window.localStorage.getItem(key)
}
/**sessionStorage 存入 */
export function setSessionStorage(key, val) {
    window.sessionStorage.setItem(key, val)
}
/** sessionStorage 取出 */
export function getSessionStorage(key) {
    return window.sessionStorage.getItem(key)
}

export default {setLocalStorage, getLocalStorage, setSessionStorage, getSessionStorage}