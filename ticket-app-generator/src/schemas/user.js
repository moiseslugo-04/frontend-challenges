import { z } from 'zod'
import { MAX_SIZE, ACCEPTED_FILES } from '../utils/constants.js'
const errorMessages = {
  too_large: 'File too large. Please upload a photo under 500MB',
  invalid_email: 'Please enter a valid email address',
}
const imageSchema = z
  .instanceof(File)
  .refine((file) => ACCEPTED_FILES.includes(file.type), {
    message: 'only JPEG and PNG files are allowed',
  })
  .refine((file) => file.size <= MAX_SIZE, { message: errorMessages.too_large })
const userSchema = z.object({
  avatar: imageSchema.optional(),
  fullname: z.string().default('unknown'),
  email: z.string().email({ message: errorMessages.invalid_email }),
  github: z.string().default('unknown'),
})
export default userSchema
