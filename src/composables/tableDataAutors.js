import axios from "axios";
import { ref } from "vue";
export const autores = ref([]);
export const autor = ref({});

export const getAutores = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get("http://localhost:3000/autores", { headers });
    autores.value = response.data;
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

export const deleteAutores = async (id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.delete(`http://localhost:3000/autores/${id}`, { headers });
    getAutores();

  } catch (error) {
    console.log(error)
  }
}

export const addAutores = async (autor) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.post(`http://localhost:3000/autores`, autor, { headers });
    getAutores();
  } catch (error) {
    console.log(error)
  }
}

export const updateAutores = async (autor) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.put(`http://localhost:3000/autores/${autor.id}`, autor, { headers });
    getAutores();
  } catch (error) {
    console.log(error)
  }
}
