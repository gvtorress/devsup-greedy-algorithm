const maxCookies = (n, children, c, cookies) => {
  let acc = 0;
  children.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < n; i++) {
    
    while (j < c && cookies[j] < children[i]) {
      j++;
    }
    
    if (j >= c) break;

    j++;
    acc++;
  }

  return acc;
}

const input1 = [
  '3',
  '1 2 3',
  '2',
  '1 1',
];

const n1 = Number(input1[0]);
const children1 = input1[1].split(' ').map((i) => Number(i));
const c1 = Number(input1[2]);
const cookies1 = input1[3].split(' ').map((i) => Number(i));

console.log(maxCookies(n1, children1, c1, cookies1));

const input2 = [
  '2',
  '1 2',
  '3',
  '2 3 1',
];

const n2 = Number(input2[0]);
const children2 = input2[1].split(' ').map((i) => Number(i));
const c2 = Number(input2[2]);
const cookies2 = input2[3].split(' ').map((i) => Number(i));

console.log(maxCookies(n2, children2, c2, cookies2));
