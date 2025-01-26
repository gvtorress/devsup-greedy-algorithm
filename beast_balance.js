const minimunImbalance = (c, s, m) => {
  // calcular media
  let avg = 0;

  for (let j = 0; j < s; j++) {
    avg += m[j]
  }

  avg = avg / c

  // adicionar extras
  if (s < 2*c) {
    let extras = 2*c - s;
    for (let i = 0; i < extras; i++) {
      m.push(0);
    }
  }

  // ordernar
  m.sort((a, b) => a - b);

  // fazer pareamento das feras
  let chambers = [];
  for (let i = 0; i < c; i++) {
    chambers[i] = [];
    chambers[i].push(m[i]);
    chambers[i].push(m[2*c - 1 - i]);
  }

  // calcular desbalanceamento
  let imbalance = 0;
  for (let i = 0; i < chambers.length; i++) {
    let xi = 0;
    // calcular massa total da jaula
    for (let j = 0; j < chambers[i].length; j++) {
      xi += chambers[i][j];
    }
    imbalance += Math.abs(xi - avg);
  }

  return imbalance;
};

const c = 3;
const s = 4;
const m = [5, 1, 2, 7];

console.log(minimunImbalance(c, s, m));
