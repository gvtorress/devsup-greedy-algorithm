const minimumCoins = (v, n, coins) => {
  coins.sort((a, b) => b - a);

  let count = 0;
  for (let i = 0; i < n; i++) {
    while (v - coins[i] >= 0) {
      v -= coins[i];
      count++;
    }
  }

  return count;
};

const v = 37;
const n = 4;
const coins = [25, 10, 5, 1];

const min = minimumCoins(37, 4, [25, 10, 5, 1]);
console.log(min);