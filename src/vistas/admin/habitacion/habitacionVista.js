
import { Habitacion } from '../../../bd/habitacion'
import { Imagen } from '../../../bd/imagen'
import Swal from 'sweetalert2'

export default {
  template: `
  <div class="crud-intro">
  <section class="crud-card">
      <h1>Panel de control</h1>
      <h2 class="mt-5">Habitaciones</h2>
      <button class="main-btn-crud crear"  title="Crear habitacion">Añadir</button>
      <table class="table mt-4">
          <thead>
              <tr>
                  <th>Imagen</th>
                  <th>Codigo</th>
                  <th>Cama</th>
                  <th>Escritorio</th>
                  <th>Armario</th>
                  <th>Precio</th>
                  <th>Piso</th>
                  <th>Imagen</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
              </tr>
          </thead>
          <tbody id="habitacion">

          </tbody>
      </table>
  </section>
</div>
  
  `,
  script: async () => {
    const token = localStorage.getItem('token')

    if(token===null){
      alert("No tienes permisos")
    }else{
      const tbody = document.querySelector('#habitacion')

      const habitaciones = await Habitacion.getAll()
  
      let tabla = ''
      for (const habitacion of habitaciones) {
        const imagen = await Imagen.getbyIdHabitacion(habitacion.id)
        tabla += `
        <tr id="${habitacion.id}">`
        if (imagen) {
          tabla += `<td><img src="${imagen.url}" alt="${imagen.nombre}" id="${imagen.id}"></td>`
          // const imagenElement = document.getElementById(`${habitacion.id}`)
          // console.log(imagenElement)
          // imagenElement.src = imagen.url
          // imagenElement.alt = imagen.nombre // Establece el atributo 'alt' con el nombre de la imagen
        } else {
          tabla += '<td><p>No tiene imagen</p></td>'
        }
        tabla += `
        <td>${habitacion.id}</td>
        <td>${habitacion.cama}</td>
        <td>${habitacion.escritorio}</td>
        <td>${habitacion.armario}</td>
        <td>${habitacion.precio}</td>
        <td>${habitacion.cfPiso}</td>
        <td><button class="btn btn-info imagen" data-id="${habitacion.id}" title="Editar">Añadir Imagen
        </button></td>
        <td><button class="btn btn-info editar" data-id="${habitacion.id}" title="Editar"><i class="bi  bi-pencil"></i>
        </button></td>
        <td><button class="btn btn-danger eliminar" data-id="${habitacion.id}" title="Eliminar ticket"><i class="bi bi-trash3"></i>
        </i>
        </button></td>`
      }
  
      tbody.innerHTML = tabla
    }
 

    const main = document.querySelector('main')

    main.addEventListener('click', async (e) => {
      if (e.target.classList.contains('eliminar')) {
        const seguro = await Swal.fire({
          icon: 'question',
          title: '¿Está seguro que desea borrar la habitacion?',
          showCancelButton: true,
          confirmButtonText: 'Sí',
          cancelButtonText: 'Cancelar'
        });
        
        if (seguro.isConfirmed) {
          const id = e.target.dataset.id
          const errores = await Habitacion.delete(id)
          if (!errores) {
            console.log(errores);
          }
          Swal.fire({
            icon: 'info',
            title: 'Se ha eliminado correctamente'
          });
          const trId = document.getElementById(id);
          trId.remove();
        }
      }
      if (e.target.classList.contains('crear')) {
        window.location = '/#/nuevaHabitacion'
      }
      if (e.target.classList.contains('editar')) {
        const id = e.target.dataset.id
        window.location = `/#/editarHabitacion/${id}`
      }
      if (e.target.classList.contains('imagen')) {
        const id = e.target.dataset.id
        window.location = `/#/anadirImagen/${id}`
      }
    })
  }
}
