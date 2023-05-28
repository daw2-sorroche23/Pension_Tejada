class User {
  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getAll() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://api-production-3aa5.up.railway.app/cliente", {
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
      const response = await fetch(`https://api-production-3aa5.up.railway.app/cliente/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  static async create(nombreC, primerApellidoC, segundoApellidoC, emailC, passwordC, telefonoC, avatarC) {
    try {
      const url = "https://api-production-3aa5.up.railway.app/cliente";
      const data = {
        nombre: nombreC,
        primerApellido: primerApellidoC,
        segundoApellido: segundoApellidoC,
        email: emailC,
        password: passwordC,
        telefono: telefonoC,
        avatar: avatarC
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
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
      const url = `https://api-production-3aa5.up.railway.app/cliente/${id}`;
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return error;
    }
  }
  static async login(emailc, passwordc) {
    try {
      console.log("dasoiuhd");
      const url = "https://api-production-3aa5.up.railway.app/cliente/login/";
      const data = {
        email: emailc,
        contrasenya: passwordc
      };
      console.log(data);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      console.log(response);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return error;
    }
  }
  static async update(nombreU, primerApellidoU, segundoApellidoU, emailU, passwordU, telefonoU, avatarU, id) {
    try {
      const url = `https://api-production-3aa5.up.railway.app/cliente/${id}`;
      const data = {
        nombre: nombreU,
        primerApellido: primerApellidoU,
        segundoApellido: segundoApellidoU,
        email: emailU,
        password: passwordU,
        telefono: telefonoU,
        avatar: avatarU
      };
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
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
export {
  User as U
};
