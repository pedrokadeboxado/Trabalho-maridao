import { useState } from 'react'
import './App.css'
import { Auth } from './components/Auth'

interface UserData {
  usuario: string
  tipo: string
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)

  // Estados do Ride Request
  const [service, setService] = useState('')
  const [destination, setDestination] = useState('')
  const [status, setStatus] = useState('')
  const [history, setHistory] = useState<string[]>([])

  const handleLoginSuccess = (user: UserData) => {
    setUserData(user)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserData(null)
    setService('')
    setDestination('')
    setStatus('')
    setHistory([])
  }

  // Função para solicitar ride
  const requestRide = () => {
    const serviceValue = service.trim()
    const destinationValue = destination.trim()

    if (!serviceValue || !destinationValue) {
      alert('Preencha serviço e destino.')
      return
    }

    setStatus(`Serviço solicitado de ${serviceValue} para ${destinationValue}. Aguardando confirmação...`)
    
    const newEntry = `${new Date().toLocaleString()} — ${serviceValue} → ${destinationValue}`
    setHistory([newEntry, ...history])
    
    setService('')
    setDestination('')
  }

  if (!isAuthenticated) {
    return <Auth onLoginSuccess={handleLoginSuccess} />
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-top">
          <div className="header-content">
            <h1>MARIDÃO DE ALUGUEL</h1>
            <p className="subtitle">Prestador de serviço local</p>
          </div>
          <div className="user-info">
            <span className="username">👤 {userData?.usuario}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <h2>Solicitar Serviço</h2>
            <div className="form-group">
              <label>Descrição:</label>
              <input
                id="service"
                type="text"
                placeholder="Digite a descrição do serviço"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Localização:</label>
              <input
                id="destination"
                type="text"
                placeholder="Digite o local do serviço"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <button onClick={requestRide}>
              Solicitar
            </button>
          </div>

          <div className="card">
            <h2>Status do Serviço</h2>
            {status ? (
              <p className="status">{status}</p>
            ) : (
              <p className="no-history">Nenhum serviço solicitado.</p>
            )}
          </div>

          <div className="card">
            <h2>Histórico</h2>
            {history.length > 0 ? (
              <ul id="history">
                {history.map((entry, index) => (
                  <li key={index}>{entry}</li>
                ))}
              </ul>
            ) : (
              <p className="no-history">Nenhuma solicitação ainda</p>
            )}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App