const minimumBoats = (n, maxWeight, p) => {
  p.sort((a, b) => b - a);
  let len = n;
  let res = 0;

  while (len > 0) {
    if (len > 1) {
      if (p[0] + p[len - 1] > maxWeight) {
        p.shift();
      } else {
        p.pop();
        p.shift();
        len--;
      }
    }
    len--;
    res++;
  }

  return res;
}

const n1 = 2;
const maxWeight1 = 3;
const p1 = [1, 2];

console.log(minimumBoats(n1, maxWeight1, p1));

const n2 = 4;
const maxWeight2 = 3;
const p2 = [3, 2, 2, 1];

console.log(minimumBoats(n2, maxWeight2, p2));

const n3 = 4;
const maxWeight3 = 5;
const p3 = [3, 5, 3, 4];

console.log(minimumBoats(n3, maxWeight3, p3));
