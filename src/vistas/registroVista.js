import { User } from '../bd/user'
import Swal from 'sweetalert2';
export default {
  template: `
  <div class="intro-singUp">
            <div class="container-fluid login">
                <div class="row">
                    <div class="col-12">
                        <section>
                            <div class="login-card-container my-5">
                                <div class="login-card">
                                    <div class="login-card-logo">
                                        <img src="../media/logo2.jpg" alt="">
                                    </div>
                                    <div class="login-card-header">
                                        <h1>Sign Up</h1>
                                        <div>Please SingUp to use plataform</div>
                                        <form class="login-card-form" id="form_registro">
                                            <div class="form-item">
                                                <span class="form-item-icon material-symbols-outlined"></span>
                                                <input type="text" placeholder="Enter Name" id="nombreR" required autofocus>
                                            </div>
                                            <div class="form-item">
                                                <span class="form-item-icon material-symbols-outlined"></span>
                                                <input type="text" placeholder="Enter Surname" id="primerapellidoR" required>
                                            </div>
                                            <div class="form-item">
                                                <span class="form-item-icon material-symbols-outlined"></span>
                                                <input type="text" placeholder="Enter Second Surname" id="segundoapellidoR" required>
                                            </div>
                                            <div class="form-item">
                                                <span class="form-item-icon material-symbols-outlined"></span>
                                                <input type="text" placeholder="Enter Email" id="emailR" required>
                                            </div>
                                            <div class="form-item">
                                                <span class="form-item-icon material-symbols-outlined"></span>
                                                <input type="text" placeholder="Enter your phone" id="telefonoR"required>
                                            </div>
                                            <div class="form-item">
                                                <span class="form-item-icon material-symbols-outlined"></span>
                                                <input type="password" placeholder="Enter Password" id="contrasenaR" required>
                                            </div>
                                            <button type="submit">Sing Up</button>
                                        </form>
                                        <div class="login-card-footer">
                                            You have an account? <a href="#">Login</a>
                                        </div>
                                    <div class="login-card-social">
                                        <div>Other Sing-up Plataform</div>
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
    document.querySelector('#form_registro').addEventListener('submit', async function (e) {
      e.preventDefault()
      try {
        const nombre = document.querySelector('#nombreR').value
        const primerApellido = document.querySelector('#primerapellidoR').value
        const segundoApellido = document.querySelector('#segundoapellidoR').value
        const contrasenya = document.querySelector('#contrasenaR').value
        const email = document.querySelector('#emailR').value
        const telefono = document.querySelector('#telefonoR').value
        const avatar = 1

        const nuevoUser = await User.create(nombre, primerApellido, segundoApellido, email, contrasenya, telefono, avatar)
        console.log(nuevoUser)
        if (nuevoUser.length > 10) {
          Swal.fire({
            icon: 'info',
            title: 'Usuario creado con éxito'
          })
          window.location.href = '/#/login'
        } else {
          let errorHTML = '';
          for (const error of nuevoUser) {
            errorHTML += `${error}\n`;
          }
          
          Swal.fire({
            icon: 'error',
            title: 'Error en logearse',
            html: errorHTML.replace(/\n/g, '<br>')
          });
        }

        // Cargamos la página login
      } catch (error) {
        console.log(error)
        alert('Error al crear usuario')
      }
    })
  }
}
