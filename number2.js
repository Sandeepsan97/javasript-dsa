// If n = 7
// then the output is
// 1 1 1 1 1 1 1
// 2 2 2 2 2 2 2
// 3 3 3 3 3 3 3
// 4 4 4 4 4 4 4
// 5 5 5 5 5 5 5
// 6 6 6 6 6 6 6
// 7 7 7 7 7 7 7


// Another way to look at Reminder is counting, for eg 12 has totally two 5s and remaining is 2.
for (let i =1;i<=7;i++){
    let output = "";
    for (let j =1; j<=7;j++)  {
        output += i + " ";
    }
console.log(output);
}