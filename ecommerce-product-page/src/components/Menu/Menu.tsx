import { useToggleMenu } from '../../hooks/useToggleMenu'
import { CloseIcon, MenuIcon } from '../Icons'
import styles from './Menu.module.css'
export function Menu() {
  const { open, toggleMenu } = useToggleMenu()
  const links = [
    { name: 'Collections', href: '#' },
    { name: 'Men', href: '#' },
    { name: 'Women', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <div className={styles.menu}>
      <div className={styles.menu__mobile}>
        <button
          className={styles.menu__btn}
          onClick={toggleMenu}
          aria-expanded={open}
          aria-label='Toggle menu'
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        {open && (
          <aside
            aria-expanded={open}
            role='navigation'
            className={styles.menu__toggle}
          >
            <nav>
              <ul>
                {links &&
                  links.map(({ name, href }) => {
                    return (
                      <li key={name}>
                        <a href={href}>{name}</a>
                      </li>
                    )
                  })}
              </ul>
            </nav>
          </aside>
        )}
      </div>
      <div className={styles.menu__desktop}>
        <nav>
          <ul>
            {links &&
              links.map(({ name, href }) => {
                return (
                  <li key={name}>
                    <a href={href}>{name}</a>
                  </li>
                )
              })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
