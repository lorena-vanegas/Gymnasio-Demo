/* ==================== MENÚ MÓVIL ==================== */
const menuToggle = document.getElementById('menuToggle');
const navegacion = document.getElementById('navegacion');

menuToggle.addEventListener('click', () => {
    const abierto = navegacion.classList.toggle('abierta');
    menuToggle.classList.toggle('abierto', abierto);
    menuToggle.setAttribute('aria-expanded', abierto);
});

navegacion.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        navegacion.classList.remove('abierta');
        menuToggle.classList.remove('abierto');
        menuToggle.setAttribute('aria-expanded', false);
    });
});

/* ==================== HEADER, BOTÓN SUBIR Y ENLACE ACTIVO ==================== */
const header = document.getElementById('header');
const botonSubir = document.getElementById('subir');
const secciones = document.querySelectorAll('main section[id]');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scroll', y > 50);
    botonSubir.classList.toggle('visible', y > 600);

    secciones.forEach(seccion => {
        const inicio = seccion.offsetTop - 120;
        const enlace = navegacion.querySelector(`a[href="#${seccion.id}"]`);
        if (enlace) enlace.classList.toggle('activo', y >= inicio && y < inicio + seccion.offsetHeight);
    });
});

/* ==================== HORARIOS ==================== */
// Edita aquí las clases de cada día
const horarios = {
    lunes: [
        { hora: '6:00 a.m.', clase: 'Funcional / HIIT', coach: 'Valentina' },
        { hora: '7:00 a.m.', clase: 'Spinning', coach: 'Camilo' },
        { hora: '12:00 p.m.', clase: 'Yoga & Movilidad', coach: 'Laura' },
        { hora: '6:00 p.m.', clase: 'Boxeo Fit', coach: 'Camilo' },
        { hora: '7:30 p.m.', clase: 'Musculación guiada', coach: 'Andrés' }
    ],
    martes: [
        { hora: '6:00 a.m.', clase: 'Spinning', coach: 'Camilo' },
        { hora: '9:00 a.m.', clase: 'Yoga & Movilidad', coach: 'Laura' },
        { hora: '6:00 p.m.', clase: 'Funcional / HIIT', coach: 'Valentina' },
        { hora: '7:30 p.m.', clase: 'Musculación guiada', coach: 'Andrés' }
    ],
    miercoles: [
        { hora: '6:00 a.m.', clase: 'Funcional / HIIT', coach: 'Valentina' },
        { hora: '7:00 a.m.', clase: 'Boxeo Fit', coach: 'Camilo' },
        { hora: '12:00 p.m.', clase: 'Spinning', coach: 'Camilo' },
        { hora: '6:30 p.m.', clase: 'Yoga & Movilidad', coach: 'Laura' }
    ],
    jueves: [
        { hora: '6:00 a.m.', clase: 'Spinning', coach: 'Camilo' },
        { hora: '9:00 a.m.', clase: 'Musculación guiada', coach: 'Andrés' },
        { hora: '6:00 p.m.', clase: 'Funcional / HIIT', coach: 'Valentina' },
        { hora: '7:30 p.m.', clase: 'Boxeo Fit', coach: 'Camilo' }
    ],
    viernes: [
        { hora: '6:00 a.m.', clase: 'Funcional / HIIT', coach: 'Valentina' },
        { hora: '12:00 p.m.', clase: 'Yoga & Movilidad', coach: 'Laura' },
        { hora: '6:00 p.m.', clase: 'Spinning', coach: 'Camilo' }
    ],
    sabado: [
        { hora: '8:00 a.m.', clase: 'Funcional en grupo', coach: 'Valentina' },
        { hora: '9:30 a.m.', clase: 'Yoga & Movilidad', coach: 'Laura' },
        { hora: '11:00 a.m.', clase: 'Boxeo Fit', coach: 'Camilo' }
    ]
};

const contenedorHorario = document.getElementById('horario');
const tabs = document.querySelectorAll('.tab');

function mostrarHorario(dia) {
    contenedorHorario.innerHTML = horarios[dia].map((item, i) => `
        <div class="horario-fila" style="animation-delay:${i * 60}ms">
            <span class="horario-hora">${item.hora}</span>
            <span class="horario-clase">${item.clase}</span>
            <span class="horario-coach">Coach ${item.coach}</span>
        </div>
    `).join('');
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('activo'));
        tab.classList.add('activo');
        mostrarHorario(tab.dataset.dia);
    });
});

mostrarHorario('lunes');

/* ==================== PLANES MENSUAL / ANUAL ==================== */
const switchPlanes = document.getElementById('switchPlanes');
const textoMensual = document.getElementById('textoMensual');
const textoAnual = document.getElementById('textoAnual');
const formatoPesos = new Intl.NumberFormat('es-CO');

switchPlanes.addEventListener('click', () => {
    const anual = switchPlanes.classList.toggle('anual');
    textoMensual.classList.toggle('activo', !anual);
    textoAnual.classList.toggle('activo', anual);
    switchPlanes.setAttribute('aria-label', anual ? 'Cambiar a pago mensual' : 'Cambiar a pago anual');

    document.querySelectorAll('.precio').forEach(precio => {
        const valor = anual ? precio.dataset.anual : precio.dataset.mensual;
        precio.textContent = formatoPesos.format(valor);
    });
});

/* ==================== CALCULADORA IMC ==================== */
const formImc = document.getElementById('formImc');
const imcResultado = document.getElementById('imcResultado');

formImc.addEventListener('submit', e => {
    e.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value) / 100;
    if (!peso || !estatura) return;

    const imc = peso / (estatura * estatura);
    let categoria;
    if (imc < 18.5) categoria = 'Bajo peso';
    else if (imc < 25) categoria = 'Peso saludable';
    else if (imc < 30) categoria = 'Sobrepeso';
    else categoria = 'Obesidad';

    // Posición del marcador en la barra (escala de 15 a 40)
    const posicion = Math.min(Math.max((imc - 15) / 25 * 100, 0), 100);

    imcResultado.innerHTML = `
        <strong>${imc.toFixed(1)}</strong>
        <span>${categoria}</span>
        <div class="imc-barra"><span class="imc-marcador" style="left:${posicion}%"></span></div>
    `;
});

/* ==================== FORMULARIO DE CONTACTO ==================== */
const formContacto = document.getElementById('formContacto');
const formMensaje = document.getElementById('formMensaje');

formContacto.addEventListener('submit', e => {
    e.preventDefault();
    let valido = true;

    formContacto.querySelectorAll('[required]').forEach(campo => {
        const ok = campo.value.trim() !== '' && campo.checkValidity();
        campo.classList.toggle('error', !ok);
        if (!ok) valido = false;
    });

    if (!valido) {
        formMensaje.textContent = 'Por favor completa los campos marcados.';
        formMensaje.className = 'form-mensaje mal';
        return;
    }

    // Aquí puedes conectar el envío real (correo, WhatsApp, backend, etc.)
    const nombre = formContacto.nombre.value.trim().split(' ')[0];
    formMensaje.textContent = `¡Gracias, ${nombre}! Te contactaremos pronto.`;
    formMensaje.className = 'form-mensaje ok';
    formContacto.reset();
});

/* ==================== CONTADORES ==================== */
function animarContador(elemento) {
    const objetivo = +elemento.dataset.objetivo;
    const duracion = 1500;
    const inicio = performance.now();

    function paso(ahora) {
        const progreso = Math.min((ahora - inicio) / duracion, 1);
        elemento.textContent = formatoPesos.format(Math.floor(objetivo * progreso));
        if (progreso < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
}

/* ==================== ANIMACIONES AL HACER SCROLL ==================== */
const observador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        const el = entrada.target;
        if (el.classList.contains('contador')) animarContador(el);
        else el.classList.add('visible');
        observador.unobserve(el);
    });
}, { threshold: 0.15 });

document.querySelectorAll('.revelar, .contador').forEach(el => observador.observe(el));

/* ==================== AÑO DEL FOOTER ==================== */
document.getElementById('anio').textContent = new Date().getFullYear();
