import './FeedbackMessage.css'
import { InfoIcon } from './Icons'
export function FeedbackMessage({ type, message }) {
  const className = type === 'error' ? 'errorMessage' : 'infoMessage'
  return (
    <span className={`feedbackMessage ${className} `}>
      <InfoIcon />
      {message}
    </span>
  )
}
