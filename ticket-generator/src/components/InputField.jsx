import { FeedbackMessage } from './FeedbackMessage'
import './InputField.css'
export function InputField({ onChange, value, error, label, ...props }) {
  return (
    <label className='input-field'>
      <span className='input-field__text-label'>{label}</span>
      <input
        className='input-field__input'
        {...props}
        onChange={onChange}
        value={value}
      />
      {error && <FeedbackMessage type={'error'} message={error} />}
    </label>
  )
}
