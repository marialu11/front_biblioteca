<template>
    <CreateAutor v-model="open" :data=modalAutors></CreateAutor>
    <v-card width="700" class="mt-8">
        <v-card-title>
            <v-row class="mt-3">
                <v-col cols="10">
                    <h2>Autores</h2>
                </v-col>
                <v-col cols="2">
                    <v-btn @click="open = true, modalAutors={}" class="fa-solid fa-plus"></v-btn>
                </v-col>
            </v-row>
        </v-card-title>
        <div class="ma-5">
            <Table :headers="headersAutor" :items="autores">
                <template v-slot:item-actions="{ item }">
                    <v-btn class="fa-solid fa-edit mr-2" @click="editAutorF(item)"></v-btn>
                    <v-btn class="fa-solid fa-trash" @click="deleteAutorF(item)"></v-btn>
                </template>
            </Table>
        </div>
    </v-card>
</template>

<script setup>
import Table from '../components/table.vue';
import CreateAutor from '../components/autores/createAutor.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { autores, getAutores, deleteAutores } from '../composables/tableDataAutors';
import { headersAutor } from '../composables/useHeaders';

const open = ref(false);
const modalAutors = ref({});

onMounted(async () => {
    try {
        await getAutores();
    } catch (error) {
        console.log(error);
    }
});

const deleteAutorF = async (item) => {
    try {
        await deleteAutores(item.id);
    } catch (error) {
        console.log(error);
    }
};

const editAutorF = (item) => {
    modalAutors.value = item;
    open.value = true;
};


</script>
../composables/tableDataAutors