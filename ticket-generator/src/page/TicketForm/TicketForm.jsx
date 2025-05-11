import styles from './TicketForm.module.css'
import { FullLogoIcon } from '../../components/Icons'
import { InputField } from '../../components/InputField'
import { UploadAvatar } from '../../components/UploadAvatar'
import { useForm } from '../../hooks/useForm'
function TicketForm({ handleSubmit }) {
  const { Data, Actions } = useForm()
  const { formData, errors } = Data
  const { handleChange, removeAvatar, validFullForm } = Actions
  const onSubmit = (event) => {
    event.preventDefault()
    const isValid = validFullForm(formData)
    if (isValid) {
      handleSubmit(formData)
    }
  }
  return (
    <section className={styles.ticketForm}>
      <header className={styles.ticketFormHeader}>
        <picture>
          <FullLogoIcon />
        </picture>
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </header>
      <form className={styles.ticketFormForm} onSubmit={onSubmit}>
        <UploadAvatar
          onChange={handleChange}
          name='avatar'
          file={formData.avatar}
          onRemove={removeAvatar}
          error={errors?.avatar}
        />
        <InputField
          label={'Full Name'}
          onChange={handleChange}
          name='fullname'
          value={formData.fullname}
          error={errors?.fullname}
        />
        <InputField
          label={'Email Address'}
          type={'email'}
          placeholder={'example@email.com'}
          onChange={handleChange}
          name='email'
          value={formData.email}
          error={errors?.email}
        />
        <InputField
          label={'GitHub Username'}
          placeholder={'@yourusername'}
          onChange={handleChange}
          value={formData.github}
          name='github'
          error={errors?.github}
        />
        <button type='submit'> Generate My Ticket</button>
      </form>
    </section>
  )
}
export default TicketForm
