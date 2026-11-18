const RegistroClinico = require('./RegistroClinico');

const clinica = new RegistroClinico();

clinica.registrarAtencion('Lola (gata)', { fecha: '02/02', motivo: 'Vacunación anual', veterinario: 'Dra. Rios', costo: 85000 });
clinica.registrarAtencion('Lola (gata)', { fecha: '15/03', motivo: 'Control de peso', veterinario: 'Dr. Gómez', costo: 40000 });
clinica.registrarAtencion('Lola (gata)', { fecha: '20/05', motivo: 'Limpieza dental', veterinario: 'Dra. Rios', costo: 150000 });

clinica.registrarAtencion('Toby (perro)', { fecha: '10/01', motivo: 'Consulta por cojera', veterinario: 'Dr. Gómez', costo: 60000 });
clinica.registrarAtencion('Toby (perro)', { fecha: '12/01', motivo: 'Radiografía de pata', veterinario: 'Dr. Gómez', costo: 120000 });
clinica.registrarAtencion('Toby (perro)', { fecha: '05/04', motivo: 'Vacunación anual', veterinario: 'Dra. Rios', costo: 85000 });

clinica.registrarAtencion('Mía (gata)', { fecha: '18/02', motivo: 'Esterilización', veterinario: 'Dra. Rios', costo: 280000 });
clinica.registrarAtencion('Mía (gata)', { fecha: '25/02', motivo: 'Control posquirúrgico', veterinario: 'Dra. Rios', costo: 0 });

const mascotas = clinica.obtenerMascotas();

for (const mascota of mascotas) {
    const historial = clinica.obtenerHistorial(mascota);
    let costoTotal = 0;

    console.log('====================================');
    console.log('Paciente:', mascota);
    console.log('Historial de atenciones:');

    historial.recorrer((atencion) => {
        console.log(` - [${atencion.fecha}] ${atencion.motivo} | ${atencion.veterinario} | $${atencion.costo}`);
        costoTotal += atencion.costo;
    });

    const vacuna = historial.buscar((atencion) =>
        atencion.motivo.toLowerCase().includes('vacunación')
    );

    const ultimaVacuna = vacuna ? `${vacuna.fecha} (${vacuna.motivo})` : 'sin registro';

    console.log('Número de atenciones:', historial.obtenerTamanio());
    console.log('Costo total: $' + costoTotal);
    console.log('Última vacunación:', ultimaVacuna);
}