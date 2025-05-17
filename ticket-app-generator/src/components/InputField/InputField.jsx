import styles from './InputField.module.css'
export function InputField({ label, onChange, value, id, ...props }) {
  return (
    <div className={styles.fieldInput}>
      <label htmlFor={id}>
        {label} {props.required && <b>(required)</b>}
      </label>
      <input id={id} onChange={onChange} value={value} {...props} />
    </div>
  )
}
