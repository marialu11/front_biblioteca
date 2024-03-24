<template>
    <v-dialog v-model="open">
        <v-card>
            <v-card-title>
                <div class="text-center mb-1">
                    <div v-if="Object.keys(props.data).length > 0"
                        class="text-h6 text-center font-weight-bold ml-4 my-2">Editar libro</div>
                    <div v-else class="text-h6 text-center font-weight-bold ml-4 my-2">Crear nuevo libro</div>
                </div>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-col sm="6">
                            <span class="font-weight-bold">Título del libro</span>
                            <v-text-field variant="outlined" v-model="libroTitulo" outlined dense
                                required></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <span class="font-weight-bold">ISBN del libro</span>
                            <v-text-field variant="outlined" v-model="libroIsbn" outlined dense required></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <v-combobox label="Autor" v-model="autorFk"
                                :items="props.autores" item-title="autor_nombre" item-value="id" variant="outlined"></v-combobox>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn :disabled="!valid || !libroTitulo || !libroIsbn || !autorFk" @click="GuardarLibro()" color="primary">Guardar</v-btn>
                <v-btn @click="clear()" color="error">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>

import { addLibros, updateLibros } from '../../composables/tableDataLibros';
import { ref, watch } from 'vue';

const libroTitulo = ref('');
const libroIsbn = ref('');
const autorFk = ref('');
const valid = ref(true);

const open = defineModel();

const props = defineProps({
    data: {
        type: Object,
        default: null
    },
    autores: {
        type: Array,
        default: []
    }
});

const GuardarLibro = async () => {
    if (Object.keys(props.data).length > 0) {
        try {
            await updateLibros({
                id_libro: props.data.id_libro,
                libro_titulo: libroTitulo.value,
                libro_isbn: libroIsbn.value,
                fk_autor_id: autorFk.value.id
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
            await addLibros({
                libro_titulo: libroTitulo.value,
                libro_isbn: libroIsbn.value,
                fk_autor_id: autorFk.value.id
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
    libroTitulo.value = '';
    libroIsbn.value = '';
    autorFk.value = '';
    open.value = false;
};

watch(() => props.data, (value) => {
    if (value) {
        libroTitulo.value = props.data.libro_titulo ?? '';
        libroIsbn.value = props.data.libro_isbn ?? '';
        autorFk.value = props.data.fk_autor_id ?? '';
    }
}, { deep: true });


</script>