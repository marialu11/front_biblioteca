import {formato_fecha} from './formatDate.js'

export const headersAutor = [
    {
        title: 'Id',
        key: 'id',
        align: 'center'
    },
    {
        title: 'Nombre',
        key: 'autor_nombre',
        align: 'center'
    },
    {
        title: 'Apellido',
        key: 'autor_apellido',
        align: 'center'
    },
    {
        title: 'Acciones',
        key: 'actions',
        align: 'center',
    }
]

export const headersLibros = [
    {
        title: 'Id',
        key: 'id_libro',
        align: 'center'
    },
    {
        title: 'ISBN',
        key: 'libro_isbn',
        align: 'center'
    },
    {
        title: 'Título',
        key: 'libro_titulo',
        align: 'center'
    },
    {
        title: 'Autor',
        key: 'kf_autor_id',
        align: 'center',
        value (row) {
            return row.autor.autor_nombre + ' ' + row.autor.autor_apellido
        }
    },
    {
        title: 'Acciones',
        key: 'actions',
        align: 'center'
    }
]

export const headersUsuarios = [
    {
        title: 'Id',
        key: 'id_usuario',
        align: 'center',
        width: '10%'
    },
    {
        title: 'Nombre',
        key: 'usuario_nombre',
        align: 'center'
    },
    {
        title: 'Apellido',
        key: 'usuario_apellido',
        align: 'center',
    },
    {
        title: 'Cédula',
        key: 'usuario_cedula',
        align: 'center'
    },
    {
        title: 'Teléfono',
        key: 'usuario_telefono',
        align: 'center',
    },
    {
        title: 'Correo',
        key: 'usuario_correo',
        align: 'center',
    },
    {
        title: 'Acciones',
        key: 'actions',
        align: 'center',
        width: '90%'
    }
]

export const headersPrestamos = [
    {
        title: 'Id',
        key: 'id_prestamo',
        align: 'center',
    },
    {
        title: 'Fecha Préstamo',
        key: 'fecha_prestamo',
        align: 'center'
    },
    {
        title: 'Fecha Devolución',
        key: 'fecha_devolucion',
        align: 'center'

    },
    {
        title: 'Usuario',
        key: 'usuario',
        align: 'center',
        value (row) {
            return row.usuario.usuario_nombre + ' ' + row.usuario.usuario_apellido
        }
    },
    {
        title: 'Libro',
        key: 'libro.libro_titulo',
        align: 'center',
    },
    {
        title: 'Acciones',
        key: 'actions',
        align: 'center',
        width: '50%'
    }
]