import axios from "axios";
import { ref } from "vue";
export const usuarios = ref([]);
export const usuario = ref({});

export const getUsuarios = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get("http://localhost:3000/usuarios", { headers });
    usuarios.value = response.data;
  } catch (error) {
    console.log(error)
  }
}

export const getAutorById = async (id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get(`http://localhost:3000/autores/${id}`, { headers });
    autor.value = response.data;
  } catch (error) {
  }
}

export const deleteLibros = async (id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.delete(`http://localhost:3000/usuarios/${id}`, { headers });
    getUsuarios();

  } catch (error) {
    console.log(error)
  }
}

export const addUsuarios = async (usuario) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.post(`http://localhost:3000/usuarios`, usuario, { headers });
    getUsuarios();
  } catch (error) {
    console.log(error)
  }
}

export const updateUsuarios = async (usuario) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.put(`http://localhost:3000/usuarios/${usuario.id_usuario}`, usuario, { headers });
    getUsuarios();
  } catch (error) {
    console.log(error)
  }
}
