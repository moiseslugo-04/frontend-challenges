import { z } from 'zod'
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
  ERROR_MESSAGE,
} from '../utils/constants'

const createImageSchema = () =>
  z.any().superRefine((file, ctx) => {
    if (file === null || !(file instanceof File) || file === undefined) return

    if (file.size > MAX_FILE_SIZE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGE.too_large,
      })
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Format allowed are PNG, JPG and JPEG',
      })
    }
  })
const userSchema = z.object({
  avatar: createImageSchema().optional(),
  fullname: z
    .string({ required_error: ERROR_MESSAGE.required })
    .trim()
    .min(3, { message: `Full Name  ${ERROR_MESSAGE.too_small}` }),

  email: z
    .string()
    .trim()
    .min(1, { message: ERROR_MESSAGE.required })
    .email({ message: ERROR_MESSAGE.email }),
  github: z
    .string()
    .optional()
    .refine((v) => !v || v.length >= 3, {
      message: `Github user name ${ERROR_MESSAGE.too_small}`,
    }),
})

export default userSchema
