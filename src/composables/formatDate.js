export const formato_fecha = (fecha_original) => {
    if (!fecha_original) return '';
    const fecha_formateada = fecha_original.split("T")[0]
    return fecha_formateada
}