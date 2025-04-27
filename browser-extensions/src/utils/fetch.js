async function fetchData(url) {
  const result = {
    data: [],
    error: null,
  }
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Something was Wrong getting the data')
    result.data = await response.json()
    return result
  } catch (error) {
    result.error = error.message
  }
  return result
}
export default fetchData
