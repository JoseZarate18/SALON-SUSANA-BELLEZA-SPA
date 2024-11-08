// Función para mostrar la sección seleccionada
function mostrarSeccion(seccionId) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');

    // Muestra la sección seleccionada
    document.getElementById(seccionId).style.display = 'block';
}

// Función para mostrar promociones dinámicamente
function mostrarPromocion() {
    const promo = document.getElementById('promo');
    promo.innerHTML = `
        <h3>¡Día de la mujer boliviana!</h3>
        <p>Comunicarles q hoy en todos los servicios estaremos con descuento Menos el 20%.</p>
        <p>Queridas clientas hoy estaremos con descuento menos el 30% en los alizados.</p>
    `;
}
