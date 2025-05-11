import { useState } from 'react'
import userSchema from '../schemas/user'
import { z } from 'zod'
import { INITIAL_ERRORS_STATE, INITIAL_STATE } from '../utils/constants'
export function useForm() {
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState(INITIAL_ERRORS_STATE)
  const handleChange = (event) => {
    const value = event.target.files?.[0] ?? event.target.value
    const name = event.target.name
    if (!(name in formData)) return
    setFormData((data) => ({ ...data, [name]: value }))
    try {
      userSchema.shape[name].parse(value)
      setErrors((errors) => ({ ...errors, [name]: null }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((errors) => ({ ...errors, [name]: error.errors[0].message }))
      }
    }
  }
  const validFullForm = (fullData) => {
    setErrors(INITIAL_ERRORS_STATE)
    try {
      userSchema.parse(fullData)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldsError = error.flatten().fieldErrors
        const keys = Object.keys(fieldsError)
        keys.forEach((key) => {
          if (key in formData) {
            setErrors((errors) => ({ ...errors, [key]: fieldsError[key] }))
          }
        })
      }
      return false
    }
  }
  const removeAvatar = () => {
    setFormData((data) => ({ ...data, avatar: undefined }))
  }

  return {
    Data: { formData, errors },
    Actions: { removeAvatar, handleChange, validFullForm },
  }
}
