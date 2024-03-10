import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

function RegisterPage() {
  const [personName, setName] = useState(" ")
  const [secondName, setSecondName] = useState(" ")
  const [userName, setUsername] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")

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
  const newUser = async() => {
    event.preventDefault()
    const credentials = await createUserWithEmailAndPassword(authentication, email, password)
    alert(credentials.user)
  }
return(
    <form className="form">
    <h2 className="form__title">Registrarse</h2>

    <div className="form__container">
      <div className="form__group">
        <input type="text" id="name" className="form__input" value={personName} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="name" className="form__label">Nombre:</label>
        <span className="form__line"></span>
      </div>

      <div className="form__group">
        <input type="text" id="apellido" className="form__input" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
        <label htmlFor="apellido" className="form__label">Apellido:</label>
        <span className="form__line"></span>
      </div>

      <div className="form__group">
        <input type="text" id="username" className="form__input" value={userName} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="username" className="form__label">UserName:</label>
        <span className="form__line"></span>
      </div>

      <div className="form__group">
        <input type="text" id="email" className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="email" className="form__label">Email:</label>
        <span className="form__line"></span>
      </div>
      
      <div className="form__group">
        <input type="text" id="password" className="form__input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="password" className="form__label">Contraseña:</label>
        <span className="form__line"></span>
      </div>

      <button type="submit" className="form__submit" value="Registrarse" onClick={newUser}>
        Registrarse
      </button>
    </div>
  </form>
);
}

export default RegisterPage