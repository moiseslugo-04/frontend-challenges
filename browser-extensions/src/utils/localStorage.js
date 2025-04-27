import { saveParse, validateKey } from './utils.js'
import { errorStorageMessage } from './constants.js'
function save(key, value) {
  validateKey(key)
  try {
    const parseValue = JSON.stringify(value)
    localStorage.setItem(key, parseValue)
  } catch (error) {
    console.error('Storage Save Error:', error)
    throw new Error(errorStorageMessage.save)
  }
}

function remove(key) {
  validateKey(key)
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error('Storage Remove Error:', error)
    throw new Error(errorStorageMessage.remove)
  }
}
function get(key) {
  validateKey(key)
  try {
    const rawValue = localStorage.getItem(key)
    if (rawValue === null) return null
    const parsedValue = saveParse(rawValue)
    return parsedValue
  } catch (error) {
    console.error('Storage Get Error:', error)
    throw new Error(errorStorageMessage.get)
  }
}
export const StorageActions = Object.freeze({ save, remove, get })
