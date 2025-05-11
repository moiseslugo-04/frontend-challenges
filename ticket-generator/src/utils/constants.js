export const INITIAL_STATE = {
  avatar: undefined,
  fullname: '',
  email: '',
  github: '',
}

export const INITIAL_ERRORS_STATE = {
  avatar: null,
  fullname: null,
  email: null,
  github: null,
}
export const ERROR_MESSAGE = {
  too_large: 'File too large. Please upload a photo under 500KB',
  email: 'Please enter a valid email address',
  too_small: 'must be at least 3 characters',
  required: 'This Field is required',
}
export const MAX_FILE_SIZE = 500 * 1024 // 500KB
export const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
