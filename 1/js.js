function changeColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('rectangle').style.backgroundColor = color;
  }
  
  // Cambiar el color cada 2 segundos
  setInterval(changeColor, 1000);
  