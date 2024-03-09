import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import NavigationBar from './Page Components/NavigationBar/NavigationBar.jsx'


function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
    </Router>
  )
}

export default App
