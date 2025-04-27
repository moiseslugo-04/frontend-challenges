import fetchData from '../utils/fetch.js'
import createStore from '../utils/createStore.js'
import { StorageActions } from '../utils/localStorage.js'
const state = {
  data: StorageActions.get('data') ?? null,
  loading: false,
  error: null,
  filter: StorageActions.get('filter') ?? 'all',
}

const actions = ({ getState, setState }) => ({
  load: async () => {
    console.log('render')
    if (getState().data !== null || getState().data?.length >= 1) {
      return setState({})
    }
    try {
      setState({ loading: true, error: null })
      const { data = [], error } = await fetchData('/src/mocks/data.json')
      if (error) throw new Error('Error getting the data', error)
      setState({ data })
      StorageActions.save('data', data)
    } catch (error) {
      console.error(error)
      setState({ error })
    } finally {
      setState({ loading: false })
    }
  },
  updateItem: (id, updates) => {
    const { data } = getState()
    const index = data.findIndex((item) => item.id === id)
    if (index === -1) return

    const target = data[index]
    const keys = Object.keys(updates) // get all keys

    const hasChange = keys.some((key) => target[key] !== updates[key]) // look for any change
    if (!hasChange) return // not change
    //If there are changes, update the state
    const newItem = { ...target, ...updates }
    const newData = [...data]
    newData[index] = newItem
    setState({ data: newData })
    StorageActions.save('data', newData)
  },
  removeItem: (id) => {
    const { data } = getState()
    const newData = data.filter((item) => item.id !== id)
    if (newData.length === data.length) return
    setState({ data: newData })
    StorageActions.save('data', newData)
  },
  setFilter: (filter) => {
    if (filter === 'active' || filter === 'inactive' || filter === 'all') {
      setState({ filter })
      StorageActions.save('filter', filter)
    }
  },
})

const appStore = createStore(state, (store) => actions(store))
appStore.load()
export default appStore
