const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Dibujar letra "A"
ctx.beginPath();
ctx.moveTo(50, 150); // Parte inferior izquierda
ctx.lineTo(100, 50); // Pico
ctx.lineTo(150, 150); // Parte inferior derecha
ctx.moveTo(75, 100); // Barra horizontal
ctx.lineTo(125, 100); // Barra horizontal
ctx.strokeStyle = 'black'; // Color de la línea
ctx.stroke();

// Dibujar letra "M"
ctx.beginPath();
ctx.moveTo(200, 150); // Parte izquierda de la "M"
ctx.lineTo(200, 50); // Punta izquierda de la "M"
ctx.lineTo(250, 100); // Punta central de la "M"
ctx.lineTo(300, 50); // Punta derecha de la "M"
ctx.lineTo(300, 150); // Parte derecha de la "M"
ctx.strokeStyle = 'black'; // Color de la línea
ctx.stroke();
