document.addEventListener('DOMContentLoaded', () => {

 
    const btnInteractivo = document.getElementById('btn-interactivo');
    const tituloPrincipal = document.getElementById('titulo-principal');

    if (btnInteractivo) {
        btnInteractivo.addEventListener('click', () => {

            document.body.style.backgroundColor = '#d1f2eb'; 
            document.body.style.color = '#117a65';
            
            tituloPrincipal.innerText = '¡Interactividad Lograda con JavaScript!';
            
            alert('¡El diseño ha cambiado exitosamente! Has interactuado con el DOM.');
        });
    }

    const formulario = document.getElementById('formulario-contacto');
    const mensajeValidacion = document.getElementById('mensaje-validacion');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {

            e.preventDefault();


            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

           
            if (nombre === '' || email === '' || mensaje === '') {
      
                mensajeValidacion.innerText = 'Por favor, completa todos los campos del formulario.';
                mensajeValidacion.className = 'error';
            } else if (!email.includes('@') || !email.includes('.')) {
        
                mensajeValidacion.innerText = 'Por favor, ingresa un correo electrónico válido.';
                mensajeValidacion.className = 'error';
            } else {
               
                mensajeValidacion.innerText = `¡Gracias por contactarnos, ${nombre}! Hemos recibido tu mensaje.`;
                mensajeValidacion.className = 'exito';
        
                formulario.reset();
            }
        });
    }
});