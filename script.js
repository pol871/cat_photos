document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.querySelector('p');
    const text = paragraph.textContent;
    paragraph.textContent = '';

    let i = 0;
    const speed = 50;

    function typeWriter() {
        if (i < text.length) {
            paragraph.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Agrega el cursor parpadeante
            const cursor = document.createElement('span');
            cursor.textContent = '_'; // O cualquier carácter que prefieras
            cursor.style.animation = 'blink 1s infinite';
            paragraph.appendChild(cursor);
        }
    }

    typeWriter();
});