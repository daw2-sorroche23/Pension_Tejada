
import { User } from '../bd/user'
import Swal from 'sweetalert2';

export const header = {
  template: `
  
  <header class="header_wrapper">
  <nav class="navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="#">
              <img decoding="async" src="./media/logo2.jpg" class="img-fluid logo" alt="logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-stream navbar-toggler-icon"></i>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav menu-navbar-nav" id="botones">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/#/home">Inicio</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#about">Habitaciones</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#rooms">Servicios</a>
                  </li>
                  <li class="nav-item mt-3 mt-lg-0">
                      <a class="main-btn" href="/#/registro">Crear cuenta</a>
                  </li>
                  <li class="nav-item mt-3 mt-lg-0">
                      <a class="main-btn login" href="#">Logearse</a>
                  </li>
                  <li class="nav-item mt-3 mt-lg-0">
                      <a class="main-btn" href="#">Favoritos</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</header>
  `,
  script: async () => {
    const header = document.querySelector('header')

    const botones = document.querySelector('#botones')

    const sesion = localStorage.getItem('id')
    if (sesion) {
      botones.innerHTML = `
      <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/#/home">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#about">Habitaciones</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#rooms">Servicios</a>
        </li>
        <li class="nav-item mt-3 mt-lg-0">
        <a class="main-btn" href="#">Favoritos</a>
    </li> 
        <li class="nav-item mt-3 mt-lg-0">
            <a class="main-btn deslogeate" href="#">Deslogearte</a>
        </li>
      `
    }
    const rol = localStorage.getItem('rol')
    if(rol){
      
      botones.innerHTML = `
      <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/#/home">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link habitacion" href="#about">Habitaciones</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/#/servicios">Servicios</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#rooms">Pisos</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#rooms">Reservas</a>
</li>
<li class="nav-item">
<a class="nav-link" href="/#/usuarios">Usuarios</a>
</li>
        <li class="nav-item mt-3 mt-lg-0">
            <a class="main-btn deslogeate" href="#">Deslogearte</a>
        </li>
    `
    }
    
    header.addEventListener('click', async (e) => {
      if (e.target.classList.contains('login')) {
        window.location = '/#/login'
      }
      if (e.target.classList.contains('habitacion')) {
        window.location = '/#/habitaciones'
      }
      if (e.target.classList.contains('deslogeate')) {
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        if(rol){
          localStorage.removeItem('rol')
        }
        Swal.fire({
          icon: 'info',
          title: 'Te has deslogeado'
        })
        botones.innerHTML = `
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/#/home">Inicio</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#about">Habitaciones</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#rooms">Servicios</a>
    </li>
    <li class="nav-item mt-3 mt-lg-0">
        <a class="main-btn registrarse" href="/#/registro">Crear cuenta</a>
    </li>
    <li class="nav-item mt-3 mt-lg-0">
        <a class="main-btn login" href="#">Logearse</a>
    </li>
    <li class="nav-item mt-3 mt-lg-0">
        <a class="main-btn" href="#">Favoritos</a>
    </li>
        `
      }
    })
  }
}
