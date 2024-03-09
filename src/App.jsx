import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import NavigationBar from './Page Components/NavigationBar/NavigationBar.jsx'
import HomePage from './Pages/Home Page/HomePage.jsx'
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx'
import ClubsPage from './Pages/Clubs Page/ClubsPage.jsx'


function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/self' element={<ProfilePage></ProfilePage>}/>
        <Route path='/clubs' element={<ClubsPage></ClubsPage>}/>
      </Routes>
    </Router>
  )
}

export default App
