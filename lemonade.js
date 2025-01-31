const lemonadeChange = (n, bills) => {
  let myBills = { 5: 0, 10: 0, 20: 0 };

  for (let i = 0; i < n; i++) {
    const bill = bills[i];
    myBills[bill]++;
    
    let change = bill - 5;

    [20, 10, 5].forEach((v) => {
      while (myBills[v] > 0 && change >= v) {
        myBills[v]--;
        change -= v;
      }
    });

    if (change > 0) return false;
  }

  return true;
}

const input1 = [5,5,5,10,20];
console.log(lemonadeChange(5, input1));

const input2 = [5,5,10,10,20];
console.log(lemonadeChange(5, input2));
