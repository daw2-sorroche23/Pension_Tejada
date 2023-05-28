
export class Admin {
  static async login (emailc, passwordc) {
    try {
      const url = 'https://api-production-3aa5.up.railway.app/admin/login'
      const data = {
        email: emailc,
        contrasenya: passwordc
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      // La solicitud fue exitosa
      const responseData = await response.json()

      return responseData
    } catch (error) {
      console.error('Error en la solicitud:', error)
      return error
    }
  }
}
