function RegisterPage() {
    return(
    <form className="form">
    <h2 className="form__title">Registrarse</h2>

    <div className="form__container">
      <div className="form__group">
        <input type="text" id="name" className="form__input" placeholder=" " />
        <label htmlFor="name" className="form__label">Nombre:</label>
        <span className="form__line"></span>
      </div>

      <div className="form__group">
        <input type="text" id="apellido" className="form__input" placeholder=" " />
        <label htmlFor="apellido" className="form__label">Apellido:</label>
        <span className="form__line"></span>
      </div>

      <div className="form__group">
        <input type="text" id="username" className="form__input" placeholder=" " />
        <label htmlFor="username" className="form__label">UserName:</label>
        <span className="form__line"></span>
      </div>

      <div className="form__group">
        <input type="text" id="email" className="form__input" placeholder=" " />
        <label htmlFor="email" className="form__label">Email:</label>
        <span className="form__line"></span>
      </div>
      
      <div className="form__group">
        <input type="text" id="password" className="form__input" placeholder=" " />
        <label htmlFor="password" className="form__label">Contraseña:</label>
        <span className="form__line"></span>
      </div>

      <input type="submit" className="form__submit" value="Registrarse" />
    </div>
  </form>
);
}

export default RegisterPage