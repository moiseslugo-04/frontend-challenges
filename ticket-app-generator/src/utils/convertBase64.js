export function convertBase64(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader()
    reader.onload = () => res(reader.result)
    reader.onerror = (e) => rej(e)
    reader.readAsDataURL(file)
  })
}
