import { BrowserRouter as Router } from 'react-router-dom'
import RoutesIndex from './routes/index'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <RoutesIndex />
    </Router>
    </>
  )
}

export default App
