import { FullLogoIcon, GithubIcon, LogoMarkIcon } from '../../components/Icons'
import unknown from '../../assets/images/unknown.jpg'
import { useTempUrl } from '../../hooks/useTempUrl'
import styles from './TicketPreview.module.css'
function TicketPreview({
  avatar,
  fullname = 'Unknown',
  email = '@Unknown.com',
  github = '@Unknown',
  generateNewTicket,
}) {
  const { url } = useTempUrl(avatar)
  const tempUrl = url ?? unknown

  return (
    <section className={styles.ticketPreview}>
      <header className={styles.ticketPreview__header}>
        <div>
          <FullLogoIcon />
        </div>
        <h1>
          Congrats, <span className={styles.fullname}>{fullname}!</span> Your
          ticket is ready.
        </h1>
        <p>
          We've emailed your ticket to{' '}
          <span className={styles.email}>{email}</span> and will send updates in
          the run up to the event.
        </p>
      </header>
      <article className={styles.ticket}>
        <div className={styles.ticket__header}>
          <div className={styles.header__logo}>
            <LogoMarkIcon />
          </div>
          <div className={styles.header__text}>
            <h2> Coding Conf</h2>
            <data value='2025-01-31'>Jan 31, 2025 / Austin, TX</data>
          </div>
        </div>
        <div className={styles.ticket__footer}>
          <figure className={styles.footer__avatar}>
            <img src={tempUrl} alt={`${fullname}'s avatar`} />
          </figure>
          <div className={styles.footer__text}>
            <p className={styles.text__fullname}>{fullname}</p>
            <p className={styles.text__github}>
              <GithubIcon />
              {github}
            </p>
          </div>
        </div>
        <div className={styles.patterns}></div>
      </article>

      <button onClick={generateNewTicket}>Generate a new Ticket</button>
    </section>
  )
}
export default TicketPreview
