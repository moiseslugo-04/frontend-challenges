import styles from './TicketGenerator.module.css'
import { FullLogo } from '../../components/Icons'
import { InputField } from '../../components/InputField/InputField'
import { UploadAvatar } from '../../components/UploadAvatar/UploadAvatar'
import { useForm } from '../../hooks/useForm'
import { ErrorWarningAlert } from '../../components/ErrorWarningAlert'
export default function TicketGenerator({ onSubmit }) {
  const { handleChange, formData, removeAvatar, errors } = useForm()
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }
  const isValidField = (value) => value?.trim().length > 0
  const isValid =
    isValidField(formData.email) && isValidField(formData.fullname)
  const hasErrors = Object.values(errors).some((v) => v !== null)
  return (
    <section className={styles.ticketGenerator}>
      <header className={styles.ticketGenerator__header}>
        <figure>
          <FullLogo />
        </figure>
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </header>
      <form className={styles.ticketGenerator__form} onSubmit={handleSubmit}>
        <UploadAvatar
          onChange={handleChange}
          avatar={formData.avatar}
          onRemove={removeAvatar}
        />
        {errors?.avatar ? (
          <ErrorWarningAlert message={errors.avatar} type='error' />
        ) : (
          <ErrorWarningAlert
            message={' Upload your photo (JPG or PNG, max size: 500KB).'}
          />
        )}

        <InputField
          label={'Full Name'}
          onChange={handleChange}
          value={formData.fullname}
          name='fullname'
          id='fullname'
          required
        />
        <InputField
          label={'Email Address'}
          type='email'
          placeholder='example@email.com'
          onChange={handleChange}
          value={formData.email}
          name='email'
          id='email'
          required
        />
        {errors?.email && (
          <ErrorWarningAlert type='error' message={errors.email} />
        )}
        <InputField
          label={'GitHub Username'}
          placeholder='@yourusername'
          onChange={handleChange}
          value={formData.github}
          id='github'
          name='github'
        />

        <button disabled={!isValid || hasErrors}> Generate My Ticket</button>
      </form>
    </section>
  )
}
