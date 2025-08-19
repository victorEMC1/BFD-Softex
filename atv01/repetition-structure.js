let arr = [];

for (let i = 0; i < 50; i++) {
  arr[i] = Math.random() * 101;
  console.log("array Original: ", arr[i].toFixed(0));
}

let j = 0;
while (j < arr.length) {
  arr[j] = arr[j] * 2;
  console.log("array multiplicado: ", arr[j].toFixed(0));
  j++;
}
