let angle = 0;

function animatePendulum() {
  angle += 0.2; // Ajusta la velocidad de oscilación cambiando este valor

  const pendulum = document.getElementById('pendulum');
  pendulum.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(animatePendulum);
}

animatePendulum();
