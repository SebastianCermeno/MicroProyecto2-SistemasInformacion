import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import './LogInPage.css'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'

function LogInPage() {
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
  const authentication = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async() => {
    event.preventDefault()
    const newCredentials = await signInWithEmailAndPassword(authentication, email, password);
    alert(newCredentials.user);
  }

return (
        <form className="form">
          <h2 className="form__title">Inicia Sesión</h2>
          <p className="form__paragraph">¿Aún no tienes una cuenta? <a href="/register" className="form__link">Entra aquí</a></p>
    
          <div className="form__container">
            <div className="form__group">
              <input type="text" id="name" className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="name" className="form__label">Correo Electronico:</label>
              <span className="form__line"></span>
            </div>
            
            <div className="form__group">
              <input type="password" id="password" className="form__input" value={password} onChange={(b) => setPassword(b.target.value)}/>
              <label htmlFor="password" className="form__label">Contraseña:</label>
              <span className="form__line"></span>
            </div>
    
            <button className="form__submit" onClick={collectData}>
              Entrar
            </button>

          </div>
        </form>
      );

}
export default LogInPage