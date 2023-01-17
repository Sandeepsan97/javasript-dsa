// Number staircase
// n=5
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let v = 5;
let number="";
for(i = 1; i<=v;  i++){
    for(n = 1; n<=i; n++){
        number += n + " ";
    }
    number += "\n";
}
console.log(number)