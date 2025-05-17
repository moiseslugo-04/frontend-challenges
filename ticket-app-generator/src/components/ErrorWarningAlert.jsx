import { InfoIcon } from './Icons'
import styles from './ErrorWarningAlert.module.css'
export function ErrorWarningAlert({ message, type = 'warning' }) {
  const color = type === 'error' ? '#e16151' : '#D1D0D5'
  const arialLiveMode = type === 'error' ? 'assertive' : 'polite'
  return (
    <div
      role='alert'
      className={styles.contentMessage}
      aria-live={arialLiveMode}
    >
      <InfoIcon color={color} />
      <p
        className={`${styles.message} ${type === 'error' ? styles.error : ''}`}
      >
        {message}
      </p>
    </div>
  )
}
