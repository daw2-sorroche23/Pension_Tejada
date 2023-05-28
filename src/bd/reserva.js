
export class Reserva {
  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getAll () {
    try {
      const response = await fetch('https://api-production-3aa5.up.railway.app/reserva')
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  static async getAllById (id) {
    try {
      const response = await fetch(`https://api-production-3aa5.up.railway.app/reserva/${id}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }

  static async create (camaC, escritorioC, armarioC, precioC, cfPisoC) {
    try {
      const token = localStorage.getItem('token')
      const url = 'https://api-production-3aa5.up.railway.app/reserva'
      const data = {
        cama: !isNaN(parseInt(camaC)) ? parseInt(camaC) : '',
        escritorio: !isNaN(parseInt(escritorioC)) ? parseInt(escritorioC) : '',
        armario: !isNaN(parseInt(armarioC)) ? parseInt(armarioC) : '',
        precio: precioC !== '' && !isNaN(parseInt(precioC)) ? parseInt(precioC) : '',
        cfPiso: cfPisoC !== '' && !isNaN(parseInt(cfPisoC)) ? parseInt(cfPisoC) : ''
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
      const token = localStorage.getItem('token')
      const url = `https://api-production-3aa5.up.railway.app/reserva/${id}`

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        },
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
}
