<template>
    <v-dialog v-model="open">
        <v-card>
            <v-card-title>
                <div class="text-center mb-1">
                    <div v-if="Object.keys(props.data).length > 0"
                        class="text-h6 text-center font-weight-bold ml-4 my-2">Editar usuario</div>
                    <div v-else class="text-h6 text-center font-weight-bold ml-4 my-2">Crear nuevo usuario</div>
                </div>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-col sm="6">
                            <span class="font-weight-bold">Nombre del usuario</span>
                            <v-text-field variant="outlined" v-model="usuarioNombre" outlined dense
                                required></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <span class="font-weight-bold">Apellido del usuario</span>
                            <v-text-field variant="outlined" v-model="usuarioApellido" outlined dense
                                required></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <span class="font-weight-bold">Cédula del usuario</span>
                            <v-text-field variant="outlined" v-model.number="usuarioCedula" type="number"
                            outlined dense required></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <span class="font-weight-bold">Teléfono del usuario</span>
                            <v-text-field variant="outlined" v-model.number="usuarioTelefono" outlined dense type="number"></v-text-field>
                        </v-col>
                        <v-col sm="6">
                            <span class="font-weight-bold">Correo del usuario</span>
                            <v-text-field variant="outlined" v-model="usuarioCorreo" outlined dense type="email"></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn :disabled="!valid || !usuarioNombre || !usuarioApellido || !usuarioCedula" @click="GuardarAutor()" color="primary">Guardar</v-btn>
                <v-btn @click="clear()" color="error">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>

import { addUsuarios, updateUsuarios } from '../../composables/tableDataUsuarios';
import { ref, watch } from 'vue';

const usuarioNombre = ref('');
const usuarioApellido = ref('');
const usuarioCedula = ref('');
const usuarioTelefono = ref('');
const usuarioCorreo = ref('');
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
            await updateUsuarios({
                id_usuario: props.data.id_usuario,
                usuario_apellido: usuarioApellido.value,
                usuario_nombre: usuarioNombre.value,
                usuario_cedula: usuarioCedula.value,
                usuario_telefono: usuarioTelefono.value,
                usuario_correo: usuarioCorreo.value
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
            await addUsuarios({
                usuario_apellido: usuarioApellido.value,
                usuario_nombre: usuarioNombre.value,
                usuario_cedula: usuarioCedula.value,
                usuario_telefono: usuarioTelefono.value,
                usuario_correo: usuarioCorreo.value
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
    usuarioApellido.value = '',
        usuarioNombre.value = '',
        usuarioCedula.value = '',
        usuarioTelefono.value = '',
        usuarioCorreo.value = '',
        open.value = false;
};

watch(() => props.data, (value) => {
    if (value) {
        usuarioNombre.value = props.data.usuario_nombre ?? '';
        usuarioApellido.value = props.data.usuario_apellido ?? '';
        usuarioCedula.value = props.data.usuario_cedula ?? '';
        usuarioTelefono.value = props.data.usuario_telefono ?? '';
        usuarioCorreo.value = props.data.usuario_correo ?? '';
    }
}, { deep: true });


</script>