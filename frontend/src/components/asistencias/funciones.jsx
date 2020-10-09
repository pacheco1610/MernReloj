export const render = (checadas) =>{
    const EmpleadosFinal = []
    if (checadas.length > 0 ) {
        checadas.map(checada=>
            {
                const empleado = checadas.filter(empleado=>empleado.empleado===checada.empleado)
                EmpleadosFinal.push(empleado)
            }
        )
    }
    return EmpleadosFinal
}