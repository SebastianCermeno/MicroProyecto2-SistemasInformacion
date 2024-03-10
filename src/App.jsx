import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import NavigationBar from './Page Components/NavigationBar/NavigationBar.jsx'
import LogInPage from './Pages/Log In Page/LogInPage.jsx'
import RegisterPage from './Pages/Register Page/RegisterPage.jsx'
import HomePage from './Pages/Home Page/HomePage.jsx'
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx'
import ClubsPage from './Pages/Clubs Page/ClubsPage.jsx'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBAwaLMum4Kf1yg16waWF_M6gDKAJijPIw",
    authDomain: "microproyecto-2-unimet.firebaseapp.com",
    projectId: "microproyecto-2-unimet",
    storageBucket: "microproyecto-2-unimet.appspot.com",
    messagingSenderId: "314563214259",
    appId: "1:314563214259:web:f717dacfd2e96959fbe9c6",
    measurementId: "G-51XGX9LY5X"
  };
  const app = initializeApp(firebaseConfig);
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/self' element={<ProfilePage></ProfilePage>}/>
        <Route path='/clubs' element={<ClubsPage></ClubsPage>}/>
        <Route path='/register' element={<RegisterPage></RegisterPage>}/>
        <Route path='/login' element={<LogInPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
