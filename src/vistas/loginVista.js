import { User } from '../bd/user'
import Swal from 'sweetalert2';

export default {
  template: `
  <div class="intro-login">
  <div class="container-fluid login">
      <div class="row">
          <div class="col-12">
              <section>
                  <div class="login-card-container">
                      <div class="login-card">
                          <div class="login-card-logo">
                              <img src="../media/logo.jpg" alt="">
                          </div>
                          <div class="login-card-header">
                              <h1>Sign In</h1>
                              <div>Please Login to use plataform</div>
                              <form class="login-card-form" id="login">
                                  <div class="form-item">
                                      <span class="form-item-icon material-symbols-outlined"></span>
                                      <input type="text" placeholder="Enter Email" id="emailL" required autofocus>
                                  </div>
                                  <div class="form-item">
                                      <span class="form-item-icon material-symbols-outlined"></span>
                                      <input type="password" placeholder="Enter Password" id="passwordL" required>
                                  </div>
                                  <div class="form-item-other">
                                      <div class="checkbox" id="rememberMeCheckbox">
                                          <label for="rememberMeCheckbox">Remember me</label>
                                      </div>
                                      <a href="#">I forgot my password</a>
                                  </div>
                                  <button type="submit">Sing In</button>
                              </form>
                              <div class="login-card-footer">
                                  Don't have an acount? <a href="/#/registro">Create a free acount</a>
                              </div>
                          </div>
                          <div class="login-card-social">
                              <div>Other Sing-in Plataform</div>
                              <div class="login-card-social-btn">
                                  <a href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                        </svg>
                                  </a>
                                  <a href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                          <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                                        </svg>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  </div>
</div>
  `,
  script: () => {
    // script para validación de formulario
    const form = document.querySelector('#login')
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      event.stopPropagation()
      // Verificamos validación del formulario
      form.classList.add('was-validated')
      if (!form.checkValidity()) {
        console.log('formulario no valido')
      } else {
        // Si los datos validan
        try {
          // Capturamos datos del formulario
          const email = document.querySelector('#emailL').value
          const contrasenya = document.querySelector('#passwordL').value

          // Intentamos loguearnos utilizando el método login de nuestra clase User
          const usuarioLogeado = await User.login(email, contrasenya)

          if (usuarioLogeado.success === false) {
            Swal.fire({
              icon: 'error',
              title: 'Error en logearse',
              text: 'La contrasenya o el email es incorrecto'
            })
          } else {
            localStorage.setItem('id', usuarioLogeado.cliente.id)
            localStorage.setItem('token', usuarioLogeado.token)

            const botones = document.querySelector('#botones')

            botones.innerHTML = `
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Inicio</a>
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
          window.location = '/#/home'
          }
        } catch (error) {
          alert('No se ha podido iniciar sesión ' + error)
        }
      }
    })
  }

}
