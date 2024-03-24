<template>
    <CreateUsuario v-model="open" :data=modalUsuarios></CreateUsuario>
    <v-card width="700" class="mt-8">
        <v-card-title>
            <v-row class="mt-3">
                <v-col cols="10">
                    <h2>Usuarios</h2>
                </v-col>
                <v-col cols="2">
                    <v-btn @click="open = true, modalUsuarios={}" class="fa-solid fa-plus"></v-btn>
                </v-col>
            </v-row>
        </v-card-title>
        <div class="ma-5">
            <Table :headers="headersUsuarios" :items="usuarios">
                <template v-slot:item-actions="{ item }">
                    <v-btn class="fa-solid fa-edit mr-2" @click="editUsuarioF(item)"></v-btn>
                    <v-btn class="fa-solid fa-trash" @click="deleteUsuarioF(item)"></v-btn>
                </template>
            </Table>
        </div>
    </v-card>
</template>

<script setup>
import Table from '../components/table.vue';
import CreateUsuario from '../components/usuarios/createUsuario.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { usuarios, getUsuarios, deleteLibros } from '../composables/tableDataUsuarios';
import { headersUsuarios } from '../composables/useHeaders';

const open = ref(false);
const modalUsuarios = ref({});

onMounted(async () => {
    try {
        await getUsuarios();
    } catch (error) {
        console.log(error);
    }
});

const deleteUsuarioF = async (item) => {
    console.log();  
    try {
        await deleteLibros(item.id_usuario);
    } catch (error) {
        console.log(error);
    }
};

const editUsuarioF = (item) => {
    console.log(item);
    modalUsuarios.value = item;
    open.value = true;
};


</script>