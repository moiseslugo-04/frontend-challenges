import { useState } from 'react'
import userSchema from '../schemas/user'
import { z } from 'zod'
import { ACCEPTED_FILES } from '../utils/constants'
export function useForm() {
  const [formData, setFormData] = useState({
    avatar: undefined,
    fullname: '',
    email: '',
    github: '',
  })
  const [errors, setErrors] = useState({
    avatar: null,
    fullname: null,
    email: null,
    github: null,
  })
  const validateData = (name, value) => {
    if (name === 'avatar' && !ACCEPTED_FILES.includes(value.type)) {
      setFormData((data) => ({ ...data, [name]: null }))
    } else {
      setFormData((data) => ({ ...data, [name]: value }))
    }
    if (!(name in formData) || (name === 'avatar ' && !value)) return

    try {
      userSchema.shape[name].parse(value)
      setErrors((errors) => ({ ...errors, [name]: null }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.errors[0])
        setErrors((errors) => ({ ...errors, [name]: error.errors[0].message }))
      }
    }
  }
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.files?.[0] ?? event.target.value
    console.log(value)
    validateData(name, value)
  }
  const removeAvatar = () => {
    setFormData((data) => ({ ...data, avatar: undefined }))
  }
  return { handleChange, removeAvatar, formData, errors }
}
