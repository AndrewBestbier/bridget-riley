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
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
];

const draw = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("app").innerHTML = `
  <canvas id="art" width="${width}px" height="${height}px" />
`;
  const cv = document.getElementById("art");
  const ctx = cv.getContext("2d");

  for (i = 0; i < Math.ceil(height / 40) * 2; i++) {
    let count = 0;
    for (j = 0; j < Math.ceil(width / 100); j++) {
      transformedRect(ctx, j * 100, i * 40 - count);
      count += 10;
    }
    count = 0;
  }
};

const transformedRect = (ctx, x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 100, y - 50);
  ctx.lineTo(x + 100, y - 10);
  ctx.lineTo(x, y + 40);
  ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx.fill();
};
