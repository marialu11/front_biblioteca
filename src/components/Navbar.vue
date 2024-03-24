<template>
    <v-card height="50" class="d-flex align-center justify-center">
    <nav class="nav-p">
        <RouterLink :to="{ name: 'libros', params: null }" type="button" class="px-2">
            <v-btn>Libros</v-btn>
        </RouterLink>
        <RouterLink :to="{ name: 'autores', params: null }" type="button" class="px-2">
            <v-btn>Autores</v-btn>
        </RouterLink>
        <RouterLink :to="{ name: 'prestamos', params: null }" type="button" class="px-2">
            <v-btn>Préstamos</v-btn>
        </RouterLink>
        <RouterLink :to="{ name: 'usuarios', params: null }" type="button" class="px-2">
            <v-btn>Usuarios</v-btn>
        </RouterLink>
    </nav>
</v-card>
</template>