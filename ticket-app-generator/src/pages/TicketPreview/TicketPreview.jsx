import { FullLogo, GithubIcon, MarkLogo } from '../../components/Icons'
import unknown from '../../assets/images/unknown.jpg'
import styles from './TicketPreview.module.css'
export default function TicketPreview({
  fullname,
  avatar,
  email,
  github,
  resetForm,
}) {
  const image = avatar ?? unknown
  const githubUser = github.trim().length <= 0 ? '@unknown' : github
  return (
    <article className={styles.ticketPreview}>
      <header>
        <figure>
          <FullLogo />
        </figure>
        <h1>
          Congrats,{' '}
          <span className={styles.gradientText}>{fullname ?? 'Full Name'}</span>{' '}
          Your ticket is ready.
        </h1>
        <p>
          We've emailed your ticket to{' '}
          <span className={styles.emailText}>{email ?? 'email'}</span> Address
          and will send updates in the run up to the event.
        </p>
      </header>
      <section className={styles.ticket}>
        <div className={styles.ticket__header}>
          <div className={styles.ticket__header_logo}>
            <MarkLogo />
          </div>
          <div className={styles.ticket__header_content}>
            <h3>Coding conf</h3>
            <data value=' Jan 31, 2025 '> Jan 31, 2025 / Austin, TX</data>
          </div>
        </div>
        <div className={styles.ticket__footer}>
          <img src={image} alt={`avatar preview of ${fullname}`} />
          <div className={styles.ticket__footer_content}>
            <h3>{fullname ?? 'Full name'}</h3>
            <p>
              <GithubIcon />
              {githubUser}
            </p>
          </div>
        </div>
      </section>
      <button onClick={resetForm}>Crate A new Ticket </button>
    </article>
  )
}
