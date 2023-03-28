import { BrowserRouter as Router } from 'react-router-dom'
import RoutesIndex from './routes/index'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Router>
      <NavBar />
      <RoutesIndex />
      <Footer />
    </Router>
    </>
  )
}

export default App
