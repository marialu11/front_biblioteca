import axios from "axios";
import { ref } from "vue";
import { formato_fecha } from './formatDate.js'

export const prestamos = ref([]);
export const prestamo = ref({});

export const getPrestamos = async () => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await axios.get("http://localhost:3000/prestamos", { headers });
        for (let i = 0; i < response.data.length; i++) {
            response.data[i].fecha_prestamo = formato_fecha(response.data[i].fecha_prestamo);
            response.data[i].fecha_devolucion = formato_fecha(response.data[i].fecha_devolucion);
        }
        prestamos.value = response.data;
    } catch (error) {
        console.log(error)
    }
}

export const deletePrestamos = async (id) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.delete(`http://localhost:3000/prestamos/${id}`, { headers });
        getPrestamos();

    } catch (error) {
        console.log(error)
    }
}

export const addPrestamos = async (prestamo) => {
    if (!prestamo.fecha_devolucion) {
        delete prestamo.fecha_devolucion;
      }
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.post(`http://localhost:3000/prestamos`, prestamo, { headers });
        getPrestamos();
    } catch (error) {
        console.log(error)
    }
}

export const updatePrestamos = async (prestamo) => {
    if (!prestamo.fecha_devolucion) {
        delete prestamo.fecha_devolucion;
      }
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.put(`http://localhost:3000/prestamos/${prestamo.id_prestamo}`, prestamo, { headers });
        getPrestamos();
    } catch (error) {
        console.log(error)
    }
}

