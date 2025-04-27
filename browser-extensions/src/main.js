import appStore from './store/appStore.js'
import './theme/theme.js'
import Card from './components/Card.js'

const container = document.getElementById('root')
const filters = document.querySelectorAll('.filter__option')

filters.forEach((btn) => {
  btn.classList.remove('active')
  btn.addEventListener('click', handleStatus)
})
function handleStatus(e) {
  filters.forEach((btn) => btn.classList.remove('active'))
  const status = e.target.getAttribute('data-status')
  if (!status) return
  if (status) return appStore.setFilter(status)
}
function filterData(data, filter) {
  filters.forEach((btn) => {
    const status = btn.getAttribute('data-status')
    if (status === filter) {
      btn.classList.add('active')
    }
  })

  if (filter === 'active') {
    return data.filter((item) => item.isActive)
  } else if (filter === 'inactive') {
    return data.filter((item) => !item.isActive)
  }
  return data
}
function renderApp({ data, loading, filter }) {
  container.innerHTML = ''
  const fragment = document.createDocumentFragment()
  if (loading) return (container.innerHTML = `<h1>Loading</h1>`)
  if (data.length <= 0)
    return (container.innerHTML = `<h1>There is not Extension</h1>`)
  const filteredData = filterData(data, filter)
  filteredData.forEach((item) => fragment.append(Card(item)))
  container.append(fragment)
}
appStore.subscribe(renderApp)
appStore.load()
