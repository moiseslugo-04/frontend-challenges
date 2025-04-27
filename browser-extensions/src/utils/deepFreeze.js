function deepFreeze(object) {
  // Freeze the object itself
  Object.freeze(object)

  // Get all property names
  const propNames = Object.getOwnPropertyNames(object)

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = object[name]
    // If value is an object, and not null, and not already frozen, recurse
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreeze(value)
    }
  }
  return object
}
export default deepFreeze
