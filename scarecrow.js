const minScarecrow = (n, field) => {
  let acc = 0;
  for (let i = 0; i < n; i++) {
    if (field[i] === '.') {
      acc++;
      i += 2;
    }
  }

  return acc;
}

console.log(minScarecrow(3, '.#.'));
console.log(minScarecrow(11, '...##....##'));
console.log(minScarecrow(2, '##'));
