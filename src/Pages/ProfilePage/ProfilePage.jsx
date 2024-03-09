function ProfilePage() {
    return(
        
            <div className="perfil-container">
              <h1>Mi Perfil</h1>
              <form className="perfil-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">Apellido:</label>
                  <input type="text" id="apellido" name="apellido" placeholder="Apellido" />
                </div>
                <div className="form-group">
                  <label htmlFor="videojuego">Videojuego Preferido:</label>
                  <input type="text" id="videojuego" name="videojuego" placeholder="Videojuego" />
                </div>
                <div className="form-group">
                  <label htmlFor="club">Club:</label>
                  <input type="text" id="club" name="club" placeholder="Nombre del Club" />
                </div>
                <button type="submit">Guardar Cambios</button>
                <button type="button" className="salir__club">Retirarse del Club</button>
              </form>
            </div>
          );
}

export default ProfilePage