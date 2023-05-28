import { Habitacion } from "../../../bd/habitacion"


export default {
  template: `
  <div class="container mt-5">
    <div class="row">
    <h1 class="text-center p-2 w-100">Registro</h1>
    <div class="col-12 col-md-4 offset-md-4">
      <div id="errores"></div>
      <form id="form_registro" class="p-3" novalidate>
        <label class="mt-3 form-label" for="nombre">Cama: </label>
        <select name="select" id="cama">
        <option value="1" selected>True</option>
        <option value="0" >False</option>
        </select>

        <label class="mt-3 form-label" for="apellidos" >Escritorio: </label>
        <select name="select" id="escritorio">
        <option value="1" selected>True</option>
        <option value="0" >False</option>
        </select>

        <label class="mt-3 form-label" for="apellidos" >Armario: </label>
        <select name="select" id="armario">
        <option value="1" selected>True</option>
        <option value="0">False</option>
        </select>

        <label class="mt-3 form-label" for="telefono">Precio: </label>
        <input 
          id="precioH"
          type="number" 
          class="form-control" 
          value="" 
          placeholder = "1" required 
          />
        <div class="invalid-feedback">Este campo no es correcto</div>

        <label class="mt-3 form-label" for="telefono">Piso: </label>
        <input 
          id="pisoH"
          type="text" 
          class="form-control" 
          value="" 
          placeholder = "1" required 
          />
        <div class="invalid-feedback">Este campo no es correcto</div>
        

        <button type="submit" class="mt-5 btn btn-success w-100">
            Enviar
        </button>
      </form>
    </div>
    
   
</div>
    `,
  script: () => {
    document.querySelector('#form_registro').addEventListener('submit', async function (e) {
      e.preventDefault()
      try {
        // Obtener el elemento <select> por su id
        const selectCama = document.getElementById('cama').value
        const selectEscritorio = document.getElementById('escritorio').value
        const selectArmario = document.getElementById('armario').value
        const precio = document.querySelector('#precioH').value
        const piso = document.querySelector('#pisoH').value

        const habitacion = await Habitacion.create(selectCama, selectEscritorio, selectArmario, precio, piso)

        if (habitacion.length > 10) {
          alert('Habitacion creada con éxito')
          window.location.href = '/#/habitacionesAdmin'
        } else {
          const errorContainer = document.querySelector('#errores')
          let errorHTML = ''
          for (const error of habitacion) {
            errorHTML += `<p>${error}</p>`
          }
          errorContainer.innerHTML = errorHTML
        }

        // Cargamos la página login
      } catch (error) {
        console.log(error)
        alert('Error al crear la habitacion')
      }
    })
  }
}
