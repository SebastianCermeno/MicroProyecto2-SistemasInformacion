class Usuario {
    constructor(nombre, apellido, usuario, email, videojuego, agrupaciones) {
        this.name = nombre
        this.surname = apellido
        this.username = usuario
        this.email = email
        if (videojuego) {
            this.favoriteGame = videojuego
        }
        else {
            this.favoriteGame = "0"
        }
        if (agrupaciones) {
            this.memberships = agrupaciones
        }
        else {
            this.memberships = []
        }
    }
}