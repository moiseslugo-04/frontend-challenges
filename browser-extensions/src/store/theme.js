import createStore from '../utils/createStore.js'
import { StorageActions } from '../utils/localStorage.js'
import { getSystemTheme } from '../utils/getSystemTheme.js'
const state = { theme: 'light' }
const actions = ({ getState, setState }) => ({
  setTheme: (theme) => {
    setState({ theme })
    StorageActions.save('theme', theme)
  },
  toggleTheme: () => {
    const theme = getState().theme === 'dark' ? 'light' : 'dark'
    StorageActions.save('theme', theme)
    setState({ theme })
  },
})
const themeStore = createStore(state, (store) => actions(store))
const initialTheme = StorageActions.get('theme') ?? getSystemTheme()
themeStore.setState({ theme: initialTheme })
export default themeStore
