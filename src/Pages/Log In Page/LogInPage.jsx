import './LogInPage.css'

function LogInPage() {
    return (
        <form className="form">
          <h2 className="form__title">Inicia Sesión</h2>
          <p className="form__paragraph">¿Aún no tienes una cuenta? <a href="#" className="form__link">Entra aquí</a></p>
    
          <div className="form__container">
            <div className="form__group">
              <input type="text" id="name" className="form__input" placeholder=" " />
              <label htmlFor="name" className="form__label">Correo Electronico:</label>
              <span className="form__line"></span>
            </div>
            
            <div className="form__group">
              <input type="password" id="password" className="form__input" placeholder=" " />
              <label htmlFor="password" className="form__label">Contraseña:</label>
              <span className="form__line"></span>
            </div>
    
            <input type="submit" className="form__submit" value="Entrar" />
          </div>
        </form>
      );
    
}
export default LogInPage