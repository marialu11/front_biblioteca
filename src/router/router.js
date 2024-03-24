import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home.vue'
import Autores from '../views/autores.vue'
import Libros from '../views/libros.vue'
import Usuarios from '../views/usuarios.vue'
import Prestamos from '../views/prestamos.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: Usuarios
    },
    {
        path: '/autores',
        name: 'autores',
        component: Autores
    },
    {
        path: '/libros',
        name: 'libros',
        component: Libros
    },
    {
        path: '/prestamos',
        name: 'prestamos',
        component: Prestamos
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;