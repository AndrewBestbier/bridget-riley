const colors = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
];

const init = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("app").innerHTML = `
    <canvas id="game" width="${width}px" height="${height}px" />
  `;
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");

  const balls = new Array(50).fill().map(() => new Ball(width, height, ctx));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach((ball) => {
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;
      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
    });
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
};

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

class Ball {
  constructor(height, width, ctx) {
    this.ctx = ctx;
    this.x = getRandomArbitrary(0, width);
    this.y = getRandomArbitrary(0, height);
    this.vx = Math.floor(Math.random() * 2) == 0 ? 5 : -5;
    this.vy = Math.floor(Math.random() * 2) == 0 ? 5 : -5;
    this.radius = 25;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}
