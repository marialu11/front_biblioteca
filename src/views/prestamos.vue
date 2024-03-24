<template>
    <CreatePrestamo v-model="open" :data=modalPrestamos :usuarios="usuarios" :libros="libros"></CreatePrestamo>
    <v-card width="700" class="mt-8">
        <v-card-title>
            <v-row class="mt-3">
                <v-col cols="10">
                    <h2>Prestamos</h2>
                </v-col>
                <v-col cols="2">
                    <v-btn @click="open = true, modalPrestamos={}" class="fa-solid fa-plus"></v-btn>
                </v-col>
            </v-row>
        </v-card-title>
        <div class="ma-5">
            <Table :headers="headersPrestamos" :items="prestamos">
                <template v-slot:item-actions="{ item }">
                    <v-btn class="fa-solid fa-edit mr-2" @click="editPrestamoF(item)"></v-btn>
                    <v-btn class="fa-solid fa-trash" @click="deletePrestamoF(item)"></v-btn>
                </template>
            </Table>
        </div>
    </v-card>
</template>

<script setup>
import Table from '../components/table.vue';
import CreatePrestamo from '../components/prestamos/createPrestamo.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { prestamos, getPrestamos, deletePrestamos } from '../composables/tableDataPrestamos';
import { usuarios, getUsuarios } from '../composables/tableDataUsuarios';
import { libros, getLibros } from '../composables/tableDataLibros';
import { headersPrestamos } from '../composables/useHeaders';

const open = ref(false);
const modalPrestamos = ref({});

onMounted(async () => {
    try {
        await getPrestamos();
        await getLibros();
        await getUsuarios();
    } catch (error) {
        console.log(error);
    }
});

const deletePrestamoF = async (item) => {
    try {
        await deletePrestamos(item.id_prestamo);
    } catch (error) {
        console.log(error);
    }
};

const editPrestamoF = (item) => {
    modalPrestamos.value = item;
    open.value = true;
};


</script>