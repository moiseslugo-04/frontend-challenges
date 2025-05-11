import { useState } from 'react'
import TicketForm from './page/TicketForm/TicketForm'
import TicketPreview from './page/TicketPreview/TicketPreview'
import './App.css'
import Patterns from './components/Patterns'
import { useEffect } from 'react'
function App() {
  const [submittedData, setSubmittedData] = useState(null)
  useEffect(() => {
    const storedData = localStorage.getItem('formData')
    console.log(storedData?.avatar)
    if (storedData) {
      setSubmittedData(JSON.parse(storedData))
    }
  }, [])

  useEffect(() => {
    if (submittedData) {
      console.log(submittedData)
      localStorage.setItem('formData', JSON.stringify(submittedData))
    }
  }, [submittedData])
  const generateNewTicket = () => {
    localStorage.removeItem('formData')
    setSubmittedData(null)
  }
  const handleSubmit = (data) => setSubmittedData(data)
  return (
    <>
      <Patterns />

      {submittedData ? (
        <TicketPreview
          {...submittedData}
          generateNewTicket={generateNewTicket}
        />
      ) : (
        <TicketForm handleSubmit={handleSubmit} />
      )}
    </>
  )
}

export default App
