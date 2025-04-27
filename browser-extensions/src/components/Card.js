import appStore from '../store/appStore.js'
function Card({ id, name, description, isActive, logo }) {
  const item = document.createElement('article')
  item.classList.add('card')
  item.setAttribute('data-id', id)
  const HTML = `
          <header class="card__header">
            <figure class="header__picture">
              <img src="${logo}" alt="${name}" />
            </figure>
            <div class="header__content">
              <h3 class="card__title">${name}</h3>
              <p class="card__text">
               ${description}
              </p>
            </div>
          </header>
          <footer class="card__footer">
            <button class="footer__btn btn-remove focus">Remove</button>
            <button
              class="footer__btn switch-status ${
                isActive ? 'active' : ''
              } focus"
              aria-label="toggle status"
            >
              <span class="circle ${isActive ? 'active' : ''}"></span>
            </button>
          </footer>
        `
  item.innerHTML = HTML
  const toggleActive = item.querySelector('.switch-status')
  const btnRemove = item.querySelector('.btn-remove')
  toggleActive.addEventListener('click', () => handleToggleActive(id, isActive))
  btnRemove.addEventListener('click', () => handleRemoveItem(id))
  return item
}
function handleToggleActive(id, isActive) {
  appStore.updateItem(id, { isActive: !isActive })
}
function handleRemoveItem(id) {
  appStore.removeItem(id)
}
export default Card
