import { Servicio } from '../../../bd/servicio'
import Swal from 'sweetalert2'

export default {
  template: `
  <div class="crud-intro">
  <section class="crud-card">
      <h1>Panel de control</h1>
      <h2 class="mt-5">Servicios</h2>
      <button class="main-btn-crud"  title="Crear habitacion">Añadir</button>
      <table class="table mt-4">
          <thead>
              <tr>
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Descripcion</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
              </tr>
          </thead>
          <tbody id="servicios">

          </tbody>
      </table>
  </section>
</div>
  
  `,
  script: async () => {
    const tbody = document.querySelector('#servicios')

    const servicios = await Servicio.getAll()
    if(servicios.mensaje){
      console.log(servicios.mensaje)
    }

    let tabla = ''
    for (const servicio of servicios) {
      tabla += `
      <tr id="${servicio.id}">
      <td>${servicio.id}</td>
      <td>${servicio.nombre}</td>
      <td>${servicio.precio}</td>
      <td>${servicio.description}</td>
      <td><button class="btn btn-info editar" data-id="${servicio.id}" title="Editar"><i class="bi  bi-pencil"></i>
      </button></td>
      <td><button class="btn btn-danger eliminar" data-id="${servicio.id}" title="Eliminar ticket"><i class="bi bi-trash3"></i>
      </i>
      </button></td>`
    }

    tbody.innerHTML = tabla

    const main = document.querySelector('main')

    main.addEventListener('click', async (e) => {
      if (e.target.classList.contains('eliminar')) {
        const seguro = await Swal.fire({
          icon: 'question',
          title: '¿Está seguro que desea borrar el servicio?',
          showCancelButton: true,
          confirmButtonText: 'Sí',
          cancelButtonText: 'Cancelar'
        });
        
        if (seguro.isConfirmed) {
          const id = e.target.dataset.id;
          const errores = await Servicio.delete(id);
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
        window.location = '/#/crearServicio'
      }
    })
  }
}
