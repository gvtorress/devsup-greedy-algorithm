const largest_number_possible = (n, s) => {
  if (9 * n < s || (s === 0 && n > 1)) return -1;
  let s_remainder = s;
  let res = '';

  for (let i = 0; i < n; i++) {
    if (s_remainder - 9 >= 0) {
      res += `${9}`;
      s_remainder -= 9;
    } else {
      res += `${s_remainder}`;
      s_remainder = 0;
    }
  }

  return Number(res);
}

console.log(largest_number_possible(2, 19));
console.log(largest_number_possible(3, 20));
console.log(largest_number_possible(4, 0));
