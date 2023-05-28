import { S as Swal } from "./main-1b116db7.js";
class Servicio {
  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getAll() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://api-production-3aa5.up.railway.app/servicio", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async getAllById(id) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`https://api-production-3aa5.up.railway.app/servicio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  static async create(nombreC, precioC, descriptionC) {
    try {
      const token = localStorage.getItem("token");
      const url = "https://api-production-3aa5.up.railway.app/servicio";
      const data = {
        nombre: nombreC,
        precio: precioC,
        description: descriptionC
      };
      console.log(data);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } else {
        console.error("Error en la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return error;
    }
  }
  static async delete(id) {
    try {
      const url = `https://api-production-3aa5.up.railway.app/servicio/${id}`;
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        console.log("El recurso se eliminó correctamente");
      } else {
        console.error("Error en la solicitud:", response);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return error;
    }
  }
  static async update(camaC, escritorioC, armarioC, precioC, cfPisoC, id) {
    try {
      const url = `https://api-production-3aa5.up.railway.app/habitacion/${id}`;
      const token = localStorage.getItem("token");
      const data = {
        cama: parseInt(camaC),
        escritorio: parseInt(escritorioC),
        armario: parseInt(armarioC),
        precio: parseInt(precioC),
        cfPiso: cfPisoC,
        Authorization: `Bearer ${token}`
      };
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } else {
        console.error("Error en la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return error;
    }
  }
}
const servicioVista = {
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
    const tbody = document.querySelector("#servicios");
    const servicios = await Servicio.getAll();
    if (servicios.mensaje) {
      console.log(servicios.mensaje);
    }
    let tabla = "";
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
      </button></td>`;
    }
    tbody.innerHTML = tabla;
    const main = document.querySelector("main");
    main.addEventListener("click", async (e) => {
      if (e.target.classList.contains("eliminar")) {
        const seguro = await Swal.fire({
          icon: "question",
          title: "¿Está seguro que desea borrar el servicio?",
          showCancelButton: true,
          confirmButtonText: "Sí",
          cancelButtonText: "Cancelar"
        });
        if (seguro.isConfirmed) {
          const id = e.target.dataset.id;
          const errores = await Servicio.delete(id);
          if (!errores) {
            console.log(errores);
          }
          Swal.fire({
            icon: "info",
            title: "Se ha eliminado correctamente"
          });
          const trId = document.getElementById(id);
          trId.remove();
        }
      }
      if (e.target.classList.contains("crear")) {
        window.location = "/#/crearServicio";
      }
    });
  }
};
export {
  servicioVista as default
};
