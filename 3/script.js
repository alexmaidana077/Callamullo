const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Configuración del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Posición del centro del péndulo
const centerX = canvas.width / 2;
const centerY = canvas.height / 3;

// Longitud del péndulo
const pendulumLength = 200;

// Ángulo inicial del péndulo
let angle = Math.PI / 4;

// Velocidad angular del péndulo
const angularVelocity = 0.05;

// Historial de puntos del péndulo
const pendulumPath = [];

// Función para generar un color RGB aleatorio
function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

setInterval(randomRGB, 2000);

// Función para dibujar el péndulo y su trayectoria
function draw() {
  // Calcular la posición del extremo del péndulo
  const x = centerX + pendulumLength * Math.sin(angle);
  const y = centerY + pendulumLength * Math.cos(angle);

  // Dibujar el péndulo
  ctx.clearRect(4, 4, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = '#000000';
  ctx.stroke();

  // Añadir el punto actual al historial del péndulo
  pendulumPath.push({ x, y });

  // Dibujar la trayectoria del péndulo
  ctx.beginPath();
  ctx.moveTo(pendulumPath[0].x, pendulumPath[0].y);
  for (let i = 0; i < pendulumPath.length; i++) {
    ctx.lineTo(pendulumPath[i].x, pendulumPath[i].y);
  }
  ctx.strokeStyle = randomRGB(); // Color RGB aleatorio para la trayectoria
  ctx.stroke();

  // Actualizar el ángulo para la próxima iteración
  angle += angularVelocity;

  requestAnimationFrame(draw);
}

draw();