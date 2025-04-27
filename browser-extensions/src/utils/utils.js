function validateKey(key) {
  if (typeof key !== 'string' || key.trim === ' ') {
    throw new Error(errorMessage.key)
  }
}
function saveParse(value) {
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

export { validateKey, saveParse }
