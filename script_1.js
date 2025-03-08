document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.querySelector('p');
    const text = paragraph.textContent;
    paragraph.textContent = '';

    let i = 0;
    const speed = 50;

    function typeWriter() {
        if (i < text.length) {
            // Reproduce el sonido de tecleo
            const audio = new Audio('tecla.wav'); // Asegúrate de tener el archivo tecla.wav
            audio.play();

            paragraph.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Agrega el cursor parpadeante
            const cursor = document.createElement('span');
            cursor.textContent = '_';
            cursor.style.animation = 'blink 1s infinite';
            paragraph.appendChild(cursor);
        }
    }

    typeWriter();

    // Interactividad con el mouse
    paragraph.addEventListener('mouseover', function() {
        paragraph.style.color = '#FFFF00'; // Cambia a amarillo al pasar el mouse
    });

    paragraph.addEventListener('mouseout', function() {
        paragraph.style.color = '#00FF00'; // Restaura el color verde al quitar el mouse
    });
});