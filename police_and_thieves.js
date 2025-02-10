const maxThieves = (n, k, positions) => {
  let thieves_index = [];
  let police_index = [];

  for (let i = 0; i < n; i++) {
    if (positions[i] === 'T') {
      thieves_index.push(i);
    } else {
      police_index.push(i);
    }
  }

  let t = 0;
  let p = 0;
  let res = 0;
  while (t < thieves_index.length && p < police_index.length) {
    const distance = Math.abs(thieves_index[t] - police_index[p]);
    if (distance <= k) {
      t++;
      p++;
      res++;
    } else if (thieves_index[t] < police_index[p]) {
      t++;
    } else {
      p++;
    }
  }

  return res
}

console.log(maxThieves(5, 1, ['P', 'T', 'T', 'P', 'T']));
console.log(maxThieves(6, 2, ['T', 'T', 'P', 'P', 'T', 'P']));
console.log(maxThieves(6, 3, ['P', 'T', 'P', 'T', 'T', 'P']));
