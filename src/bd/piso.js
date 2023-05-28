export class Piso {
  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getAll () {
    try {
      const response = await fetch('https://api-production-3aa5.up.railway.app/piso')
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  static async getAllById (id) {
    try {
      const response = await fetch(`https://api-production-3aa5.up.railway.app/piso/${id}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }

  static async create (cocinaC, salonC, terrazaC, wifiC, aseosC, sexoC) {
    try {
      const token = localStorage.getItem('token')
      const url = 'https://api-production-3aa5.up.railway.app/piso'
      const data = {
        cocina: !isNaN(parseInt(cocinaC)) ? parseInt(cocinaC) : '',
        salon: !isNaN(parseInt(salonC)) ? parseInt(salonC) : '',
        terraza: !isNaN(parseInt(terrazaC)) ? parseInt(terrazaC) : '',
        wifi: !isNaN(parseInt(wifiC)) ? parseInt(wifiC) : '',
        aseos: aseosC,
        sexo: sexoC
      }

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
      const url = `https://api-production-3aa5.up.railway.app/piso/${id}`

      const response = await fetch(url, {
        method: 'DELETE',
        Authorization: `Bearer ${token}`
      })

      // Verificar el estado de la respuesta
      if (response.ok) {
        // La solicitud fue exitosa
        console.log('El recurso se eliminó correctamente')
        console.log(response)
      } else {
        // Ocurrió un error en la solicitud
        console.error('Error en la solicitud:', response)
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
      return error
    }
  }

  static async update (cocinaC, salonC, terrazaC, wifiC, aseosC, sexoC, id) {
    try {
      const token = localStorage.getItem('token')
      const url = `https://api-production-3aa5.up.railway.app/piso/${id}`
      const data = {
        cocina: parseInt(cocinaC),
        salon: parseInt(salonC),
        terraza: parseInt(terrazaC),
        wifi: parseInt(wifiC),
        aseos: aseosC,
        sexo: sexoC
      }

      const response = await fetch(url, {
        method: 'PUT',
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
}
