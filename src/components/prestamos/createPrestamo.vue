<template>
    <v-dialog v-model="open">
        <v-card>
            <v-card-title>
                <div class="text-center mb-1">
                    <div v-if="Object.keys(props.data).length > 0"
                        class="text-h6 text-center font-weight-bold ml-4 my-2">Editar préstamo</div>
                    <div v-else class="text-h6 text-center font-weight-bold ml-4 my-2">Crear nuevo préstamo</div>
                </div>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-col sm="6">
                            <span class="font-weight-bold">Fecha del préstamo</span>
                            <v-text-field variant="outlined" bg-color="white" v-model="prestamoFecha"
                                type="date" :max="maxDate1" clearable></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <span class="font-weight-bold">Fecha de devolución</span>
                            <v-text-field variant="outlined" bg-color="white" v-model="devolucionFecha"
                                type="date" :max="maxDate2" clearable></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <v-combobox label="Usuario" v-model="userFk" :items="props.usuarios" item-title="usuario_nombre"
                                item-value="id_usuario" variant="outlined"></v-combobox>
                        </v-col>
                        <v-col sm="6">
                            <v-combobox label="Libro" v-model="libroFk" :items="props.libros" item-title="libro_titulo"
                                item-value="id_libro" variant="outlined"></v-combobox>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn :disabled="!valid || !prestamoFecha || !userFk || !libroFk" @click="GuardarLibro()" color="primary">Guardar</v-btn>
                <v-btn @click="clear()" color="error">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>

import { addPrestamos, updatePrestamos } from '../../composables/tableDataPrestamos';
import { ref, watch } from 'vue';

const prestamoFecha = ref('');
const devolucionFecha = ref('');
const userFk = ref('');
const libroFk = ref('');
const valid = ref(true);

const maxDate1 = new Date().toISOString().substr(0, 10);
const maxDate2 = new Date().toISOString().substr(0, 10);

const open = defineModel();

const props = defineProps({
    data: {
        type: Object,
        default: null
    },
    usuarios: {
        type: Array,
        default: []
    },
    libros: {
        type: Array,
        default: []
    }

});

const GuardarLibro = async () => {
    if (Object.keys(props.data).length > 0) {
        try {
            await updatePrestamos({
                id_prestamo: props.data.id_prestamo,
                fecha_prestamo: prestamoFecha.value,
                fecha_devolucion: devolucionFecha.value,
                fk_usuario_id: userFk.value.id_usuario ?? userFk.value,
                fk_libro_id: libroFk.value.id_libro ?? libroFk.value
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
            await addPrestamos({
                fecha_prestamo: prestamoFecha.value,
                fecha_devolucion: devolucionFecha.value,
                fk_usuario_id: userFk.value.id_usuario,
                fk_libro_id: libroFk.value.id_libro
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
    prestamoFecha.value = '';
    devolucionFecha.value = '';
    userFk.value = '';
    libroFk.value = '';
    open.value = false;
};

watch(() => props.data, (value) => {
    if (value) {
        prestamoFecha.value = props.data.fecha_prestamo ?? '';
        devolucionFecha.value = props.data.fecha_devolucion ?? '';
        userFk.value = props.data.fk_usuario_id ?? '';
        libroFk.value = props.data.fk_libro_id ?? '';
    }
}, { deep: true });


</script>