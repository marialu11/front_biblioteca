<template>
    <v-dialog v-model="open">
        <v-card>
            <v-card-title>
                <div class="text-center mb-1">
                    <div v-if="Object.keys(props.data).length > 0" class="text-h6 text-center font-weight-bold ml-4 my-2">Editar autor</div>
                    <div v-else class="text-h6 text-center font-weight-bold ml-4 my-2">Crear nuevo autor</div>
                </div>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-col sm="6">
                            <span class="font-weight-bold">Nombre del autor</span>
                            <v-text-field variant="outlined" v-model="autorNombre" outlined dense
                                required></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <span class="font-weight-bold">Apellido del autor</span>
                            <v-text-field variant="outlined" v-model="autorApellido" outlined dense
                                required></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn :disabled="!valid || !autorNombre || !autorApellido" @click="GuardarAutor()" color="primary">Guardar</v-btn>
                <v-btn @click="clear()" color="error">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>

import { addAutores, updateAutores } from '../../composables/tableDataAutors';
import { ref, watch } from 'vue';

const autorNombre = ref('');
const autorApellido = ref('');
const valid = ref(true);

const open = defineModel();

const props = defineProps({
    data: {
        type: Object,
        default: null
    }
});

const GuardarAutor = async () => {
    if (Object.keys(props.data).length > 0) {
        try {
            await updateAutores({
                id: props.data.id,
                autor_nombre: autorNombre.value,
                autor_apellido: autorApellido.value
            })
        } catch (error) {
            console.log(error);
        }
        finally {
            clear();
        }
    }
    else {
        try {
            await addAutores({
                autor_nombre: autorNombre.value,
                autor_apellido: autorApellido.value
            })
        } catch (error) {
            console.log(error);
        }
        finally {
            clear();
        }
    }
};

const clear = () => {
    props.data = {};
    autorNombre.value = '';
    autorApellido.value = '';
    open.value = false;
};

watch(() => props.data, (value) => {
    if (value) {
        autorNombre.value = props.data.autor_nombre ?? '';
        autorApellido.value = props.data.autor_apellido ?? '';
    }
}, { deep: true });


</script>