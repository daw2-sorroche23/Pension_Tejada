import { Habitacion } from '../../../bd/habitacion'
import Swal from 'sweetalert2'

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
                              <img width="500px" src="./media/logo.svg" alt="">
                          </div>
                          <div class="login-card-header">
                              <form class="login-card-form" id="form_registro">
                                  <div class="form-item">
                                      <label class="mt-3 form-label" for="nombre">Cama: </label>
                                      <select class="text-center" name="select" id="cama">
                                          <option value="1" selected>True</option>
                                          <option value="0" >False</option>
                                      </select>
                                  </div>
                                  <div class="form-item">
                                      <label class="mt-3 form-label" for="apellidos" >Escritorio: </label>
                                      <select class="text-center" name="select" id="escritorio">
                                          <option value="1" selected>True</option>
                                          <option value="0" >False</option>
                                      </select>
                                  </div>
                                  <div class="form-item">
                                      <label class="mt-3 form-label" for="apellidos" >Armario: </label>
                                      <select class="text-center" name="select" id="armario">
                                          <option value="1" selected>True</option>
                                          <option value="0">False</option>        
                                      </select>
                                  </div>
                                  <div class="form-item">
                                      <label class="mt-3 form-label" for="telefono">Precio: </label>
                                      <input 
                                      id="precioH"
                                      type="number" 
                                      class="form-control" 
                                      value="" 
                                      placeholder = "1" required 
                                      />
                                      <div class="invalid-feedback">Este campo no es correcto</div>
                                  </div>
                                  <div class="form-item">
                                      <label class="mt-3 form-label" for="telefono">Piso: </label>
                                      <input 
                                        id="pisoH"
                                        type="text" 
                                        class="form-control" 
                                        value="" 
                                        placeholder = "1" required 
                                        />
                                      <div class="invalid-feedback">Este campo no es correcto</div>
                                  </div>
                                  <button type="submit">Crear</button>
                              </form>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  </div>
</div>
    `,
  script: async(id) => {

    const habitacion = await Habitacion.getAllById(id)


    const selectCama = document.getElementById('cama')

    if(habitacion.cama==0){
      selectCama.innerHTML= `
      <option value="1" >True</option>
      <option value="0" selected>False</option>
      `
    }else{
      selectCama.innerHTML= `
      <option value="1" selected>True</option>
      <option value="0" >False</option>
      `      
    }

    const selectEscritorio = document.getElementById('escritorio')

    if(habitacion.escritorio==0){
      selectEscritorio.innerHTML= `
      <option value="1" >True</option>
      <option value="0" selected>False</option>
      `
    }else{
      selectEscritorio.innerHTML= `
      <option value="1" selected>True</option>
      <option value="0" >False</option>
      `      
    }

    const selectArmario = document.getElementById('armario')

    if(habitacion.escritorio==0){
      selectArmario.innerHTML= `
      <option value="1" >True</option>
      <option value="0" selected>False</option>
      `
    }else{
      selectArmario.innerHTML= `
      <option value="1" selected>True</option>
      <option value="0" >False</option>
      `      
    }

    const precoInput = document.querySelector('#precioH')

    precoInput.value = habitacion.precio

    const pisoInput = document.querySelector('#pisoH')

    pisoInput.value = habitacion.cfPiso
    

    document.querySelector('#form_registro').addEventListener('submit', async function (e) {
      e.preventDefault()
      try {
        // Obtener el elemento <select> por su id
        const cama = selectCama.value
        const escritorio = selectEscritorio.value
        const armario = selectArmario.value
        const precio = precoInput.value
        const piso = pisoInput.value

        const habitacion = await Habitacion.update(cama, escritorio, armario, precio, piso, id)

        if (habitacion.length > 10) {
          alert('Habitacion actualizada con éxito')
          window.location.href = '/#/habitacionesAdmin'
        } else {
          let errorHTML = '';
          for (const error of habitacion) {
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
