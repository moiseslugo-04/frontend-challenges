import deepFreeze from './deepFreeze.js'
function createStore(initialState = {}, createActions) {
  let state = deepFreeze(initialState)
  const listeners = new Set()

  const notify = () => listeners.forEach((cb) => cb(state))

  const subscribe = (cb) => {
    listeners.add(cb)
    return () => listeners.delete(cb)
  }
  const getState = () => state
  const setState = (newState) => {
    state = deepFreeze({ ...state, ...newState })
    notify()
  }

  //validation to avoid the runtime error
  const store = {
    subscribe,
    getState,
    setState,
  }
  if (!(typeof createActions === 'function')) return store

  const actions = createActions(store) // here pass the methods to create the actions
  Object.assign(store, actions)
  return store
}

export default createStore
