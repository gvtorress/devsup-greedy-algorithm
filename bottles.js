const maxBottles = (n, w, b) => {
  b.sort((a, b) => a - b);
  let acc = 0;
  let w_left = w;
  for (let i = 0; i < n; i++) {
    if (b[i] <= w_left) {
      acc++;
      w_left -= b[i];
    } else {
      break;
    }
  }

  return acc;
}

const input1 = ['5 10', '8 5 4 3 2'];

const [n1, w1] = input1[0].split(' ').map((i) => Number(i));
const b1 = input1[1].split(' ').map((i) => Number(i));

console.log(maxBottles(n1, w1, b1));

const input2 = ['3 10', '6 3 2'];
const [n2, w2] = input2[0].split(' ').map((i) => Number(i));
const b2 = input2[1].split(' ').map((i) => Number(i));

console.log(maxBottles(n2, w2, b2));
