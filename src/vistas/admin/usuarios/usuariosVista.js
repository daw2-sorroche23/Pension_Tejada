
import { User } from '../../../bd/user'
import Swal from 'sweetalert2'

export default {
  template: `
  <div class="crud-intro">
  <section class="crud-card">
      <h1>Panel de control</h1>
      <h2 class="mt-5">Usuarios</h2>
      <table class="table mt-4">
          <thead>
              <tr>
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Primer Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>Email</th>
                  <th>Telefono</th>
                  <th>Avatar</th>
                  <th>Eliminar</th>
              </tr>
          </thead>
          <tbody id="usuarios">

          </tbody>
      </table>
  </section>
</div>
  
  `,
  script: async () => {
    const tbody = document.querySelector('#usuarios')

    const usuarios = await User.getAll()
    if(usuarios.mensaje){
      console.log(usuarios.mensaje)
    }
    
    let tabla = ''
    for (const usuario of usuarios) {
      tabla += `
      <tr id="${usuario.id}">
      <td>${usuario.id}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.primerApellido}</td>
      <td>${usuario.segundoApellido}</td>
      <td>${usuario.email}</td>
      <td>${usuario.telefono}</td>
      <td>${usuario.avatar}</td>
      <td><button class="btn btn-danger eliminar" data-id="${usuario.id}" title="Eliminar ticket"><i class="bi bi-trash3"></i>
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
          const errores = await User.delete(id);
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
