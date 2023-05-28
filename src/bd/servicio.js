export class Servicio {
  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getAll () {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('https://api-production-3aa5.up.railway.app/servicio', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  static async getAllById (id) {
    try {
      const token = localStorage.getItem('token')

      const response = await fetch(`https://api-production-3aa5.up.railway.app/servicio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }

  static async create (nombreC, precioC, descriptionC) {
    try {
      const token = localStorage.getItem('token')
      const url = 'https://api-production-3aa5.up.railway.app/servicio'
      const data = {
        nombre: nombreC,
        precio: precioC,
        description: descriptionC
      }

      console.log(data)

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
      console.log(response)

      // Verificar el estado de la respuesta
      if (response.ok) {
        // La solicitud fue exitosa
        const responseData = await response.json()
        return responseData
      } else {
        // Ocurrió un error en la solicitud
        console.error('Error en la solicitud:', response.status)
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
      return error
    }
  }

  static async delete (id) {
    try {
      const url = `https://api-production-3aa5.up.railway.app/servicio/${id}`
      const token = localStorage.getItem('token')
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // Verificar el estado de la respuesta
      if (response.ok) {
        // La solicitud fue exitosa
        console.log('El recurso se eliminó correctamente')
      } else {
        // Ocurrió un error en la solicitud
        console.error('Error en la solicitud:', response)
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
      return error
    }
  }

  static async update (camaC, escritorioC, armarioC, precioC, cfPisoC, id) {
    try {
      const url = `https://api-production-3aa5.up.railway.app/habitacion/${id}`
      const token = localStorage.getItem('token')
      const data = {
        cama: parseInt(camaC),
        escritorio: parseInt(escritorioC),
        armario: parseInt(armarioC),
        precio: parseInt(precioC),
        cfPiso: cfPisoC,
        Authorization: `Bearer ${token}`
      }

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      // Verificar el estado de la respuesta
      if (response.ok) {
        // La solicitud fue exitosa
        const responseData = await response.json()
        return responseData
      } else {
        // Ocurrió un error en la solicitud
        console.error('Error en la solicitud:', response.status)
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
      return error
    }
  }
}
