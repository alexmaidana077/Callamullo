document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const container = document.getElementById('container');
    
    let posX = 1;
    let posY = 1;
    const speed = 10;
  
    function movePlayer(direction) {
      switch (direction) {
        case 'left':
          posX -= speed;
          break;
        case 'right':
          posX += speed;
          break;
        case 'up':
          posY -= speed;
          break;
        case 'down':
          posY += speed;
          break;
      }
      player.style.left = posX + 'px';
      player.style.top = posY + 'px';
    }
  
    document.addEventListener('keydown', (event) => {
      const key = event.key.toLowerCase();
      switch (key) {
        case 'a':
          movePlayer('left');
          break;
        case 'd':
          movePlayer('right');
          break;
        case 'w':
          movePlayer('up');
          break;
        case 's':
          movePlayer('down');
          break;
      }
    });
  });
  