export class Imagen {
  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getbyIdHabitacion (id) {
    try {
      const response = await fetch(`https://api-production-3aa5.up.railway.app/imagen/${id}`)
      const data = await response.json()
      console.log(data)

      const imagenData = data[0].imagen
      const imagenBuffer = new Uint8Array(imagenData.data)
      const blob = new Blob([imagenBuffer], { type: 'image/jpeg' })
      const urlImagen = URL.createObjectURL(blob)
      console.log(data)

      return {
        url: urlImagen,
        nombre: data.nombre,
        id: data.id
      }
    } catch (error) {
      console.log('Error al obtener la imagen:', error)
    }
  }

  static async create (id, formData) {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`https://api-production-3aa5.up.railway.app/imagen/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      } else {
        console.error('Error en la solicitud:', response.status)
      }
    } catch (error) {
      console.log('Error al insertar la imagen:', error)
    }
  }
}
