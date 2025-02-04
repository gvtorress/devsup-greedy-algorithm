const minimumRooms = (n, start, end) => {
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let rooms = 0;
  let i = 0;
  let j = 0;
  let res = 0;

  while (i < n || j < n) {
    if (start[i] <= end[j]) {
      rooms++;
      i++;
    } else {
      rooms--;
      j++;
    }

    res = Math.max(res, rooms);
  }

  return res;
}

const n1 = 6;
const start1 = [900, 940, 950, 1100, 1500, 1800];
const end1 = [910, 1200, 1120, 1130, 1900, 2000];

console.log(minimumRooms(n1, start1, end1));

const n2 = 3;
const start2 = [900, 1100, 1235];
const end2 = [1000, 1200, 1240];

console.log(minimumRooms(n2, start2, end2));
