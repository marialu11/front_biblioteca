import axios from "axios";
import { ref } from "vue";

export const libros = ref([]);
export const libro = ref({});

export const getLibros = async () => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await axios.get("http://localhost:3000/libros", { headers });
        libros.value = response.data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteLibros = async (id) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.delete(`http://localhost:3000/libros/${id}`, { headers });
        getLibros();

    } catch (error) {
        console.log(error)
    }
}

export const addLibros = async (libro) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.post(`http://localhost:3000/libros`, libro, { headers });
        getLibros();
    } catch (error) {
        console.log(error)
    }
}

export const updateLibros = async (libro) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.put(`http://localhost:3000/libros/${libro.id_libro}`, libro, { headers });
        getLibros();
    } catch (error) {
        console.log(error)
    }
}

