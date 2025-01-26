const mostTasks = (n, tasks) => {
  // 1 - Ordernar por tempo de termino
  tasks.sort((a, b) => a.end - b.end);

  // 2 - Percorrer as tarefas
  let res = 0;
  let time = 0;
  for (let i = 0; i < n; i++) {
    // 3 - Escolhemos caso nao haja conflito
    if (tasks[i].start >= time) {
      res++;
      time = tasks[i].end;
    }
  }

  return res;
};

const tasks = [
  { start: 0, end: 6 },
  { start: 1, end: 4 },
  { start: 3, end: 5 },
  { start: 3, end: 8 },
  { start: 4, end: 7 },
  { start: 5, end: 9 },
  { start: 6, end: 10 },
  { start: 8, end: 11 },
];

console.log(mostTasks(8, tasks));
