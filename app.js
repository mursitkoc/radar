const getCSSVal = (e, v) => e.style.getPropertyValue(v);
const mod = (n, m) => ((n % m) + m) % m; // Fix negative Modulo
const PI = Math.PI;
const TAU = PI * 2;

const radar = (elRadar) => {

  const elBeam = elRadar.querySelector(".beam");
  const elsDot = elRadar.querySelectorAll(".dot");

  const update = () => {
    const beamAngle = parseFloat(getComputedStyle(elBeam).getPropertyValue("rotate")) * PI / 180 || 0;

    elsDot.forEach(elDot => {
      const x = getCSSVal(elDot, "--x") - 0.5;
      const y = getCSSVal(elDot, "--y") - 0.0;
      const dotAngle = mod(Math.atan2(y, x), TAU);
      const opacity = mod(dotAngle - beamAngle, TAU) / TAU;
      elDot.style.opacity = opacity;
    });

    requestAnimationFrame(update);
  };
  
  update();
};

document.querySelectorAll(".radar").forEach(radar);

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(10, 100);
ctx.lineWidth = 1;
ctx.strokeStyle = "red";
ctx.stroke();