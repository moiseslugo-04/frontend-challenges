import fetchData from '../../utils/fetch.js'
import deepFreeze from '../../utils/deepFreeze.js'
function createStore() {
  let state = {
    theme: '',
    data: [],
    loading: '',
  }
  //observer pattern
  const listeners = new Set() // this ensures that  we won't see repeat listeners

  //notify to each listener about each change
  const notify = () => listeners.forEach((cb) => cb(state)) // sends the current state to each listener

  //set up the state
  const setState = (newState) => {
    state = { ...state, ...newState }
    deepFreeze(state)
    notify()
  }

  //subscribe function
  const subscribe = (cb) => {
    listeners.add(cb)
    return () => listeners.delete(cb) //  callback to unsubscribe
  }

  //load data in the firs render

  const load = () => {
    if (state.data.length <= 0 || state.data === null) {
      fetchData('/src/mocks/data.json')
        .then((res) => {
          state.loading = true
          const { data, error } = res
          if (error) throw new Error(error)
          setState({ data })
        })
        .catch((err) => console.log(err))
        .finally(() => (state.loading = false))
    }
  }

  return {
    getState: () => state,
    subscribe,
    load,
    actions: {
      updateItem: (id, updates) => {
        const newData = state.data.map((item) => {
          if (item.id === id) {
            const newItem = { ...item, ...updates }
            return newItem
          }
          return item
        })
        setState({ data: newData })
      },
      removeItem: (id) => {
        const newState = state.data.filter((item) => item.id === id)
        setState({ data: newState })
      },
    },
  }
}
const store = createStore()
store.load()
export default store
