import TicketGenerator from './pages/TicketGenerator/TicketGenerator'
import TicketPreview from './pages/TicketPreview/TicketPreview'
import { convertBase64 } from './utils/convertBase64'
import './App.css'
import { useStorage } from './hooks/useStorage'
import { Patterns } from './components/Patterns/Patterns'
function App() {
  const { storage, setStorage, clearStorage } = useStorage('fullData')
  const handleSubmit = async (formData) => {
    const base64Avatar =
      formData.avatar instanceof File
        ? await convertBase64(formData.avatar)
        : formData.avatar
    const dataToSubmit = { ...formData, avatar: base64Avatar }
    setStorage(dataToSubmit)
  }

  return (
    <main className='app'>
      {storage ? (
        <TicketPreview {...storage} resetForm={clearStorage} />
      ) : (
        <TicketGenerator onSubmit={handleSubmit} />
      )}
      <Patterns />
    </main>
  )
}

export default App
