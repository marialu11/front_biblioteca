<template>
    <CreateLibro v-model="open" :data=modalLibros :autores="autores"></CreateLibro>
    <v-card width="700" class="mt-8">
        <v-card-title>
            <v-row class="mt-3">
                <v-col cols="10">
                    <h2>Libros</h2>
                </v-col>
                <v-col cols="2">
                    <v-btn @click="open = true, modalLibros={}" class="fa-solid fa-plus"></v-btn>
                </v-col>
            </v-row>
        </v-card-title>
        <div class="ma-5">
            <Table :headers="headersLibros" :items="libros">
                <template v-slot:item-actions="{ item }">
                    <v-btn class="fa-solid fa-edit mr-2" @click="editLibroF(item)"></v-btn>
                    <v-btn class="fa-solid fa-trash" @click="deleteLibroF(item)"></v-btn>
                </template>
            </Table>
        </div>
    </v-card>
</template>

<script setup>
import Table from '../components/table.vue';
import CreateLibro from '../components/libros/createLibro.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { libros, getLibros, deleteLibros } from '../composables/tableDataLibros';
import { autores, getAutores } from '../composables/tableDataAutors';
import { headersLibros } from '../composables/useHeaders';

const open = ref(false);
const modalLibros = ref({});

onMounted(async () => {
    try {
        await getLibros();
        await getAutores();
    } catch (error) {
        console.log(error);
    }
});

const deleteLibroF = async (item) => {
    try {
        await deleteLibros(item.id_libro);
    } catch (error) {
        console.log(error);
    }
};

const editLibroF = (item) => {
    modalLibros.value = item;
    open.value = true;
};


</script>