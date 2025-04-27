import themeStore from '../store/theme.js'
import { ICONS } from '../utils/constants.js'
const buttonTheme = document.getElementById('btn-theme')
const handleClick = () => themeStore.toggleTheme()

buttonTheme
  ? buttonTheme?.addEventListener('click', handleClick)
  : console.warn('Button theme not found!')

function updateBodyTheme(theme = 'light') {
  document.documentElement.setAttribute('data-theme', theme)
}
function updateIcon(theme, target) {
  if (!target) return
  const icon = ICONS[theme] || ICONS.light
  const path = target.getAttribute('src')
  if (!path) {
    const defaultPath = `/src/assets/images/${icon}`
    target.setAttribute('src', defaultPath)
    return // stop here
  }
  const iconPath = path.replace(/[^/]+$/, icon)
  target.setAttribute('src', iconPath)
}

function handleToggleTheme() {
  const { theme } = themeStore.getState()
  const target = buttonTheme?.querySelector('img')
  updateIcon(theme, target) // update the button image
  updateBodyTheme(theme)
}
themeStore.subscribe(handleToggleTheme)
handleToggleTheme() // init Theme function
