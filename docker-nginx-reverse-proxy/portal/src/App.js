import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    const login = async () => {
      try {
        const response = await fetch('http://localhost/api')
        const respJson = await response.json()
        console.log({ respJson })
      } catch (error) {
        console.error(error)
      }
    }
    login()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Service</p>
      </header>
    </div>
  )
}

export default App
