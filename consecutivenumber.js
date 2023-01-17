// 3. Consecutive Number Diamond
//    1
//   1 2
//  1 2 3
// 1 2 3 4
//  1 2 3
//   1 2
//    1

for (let i =1;i<=4;i++){
    let gap ="";
    for(let j=1;j<=4 - i;j++){
        gap += " ";
    }
        for (let p =1; p<=i; p++){
            gap +=p + " ";
        }
        console.log(gap);
    }
for (let i =3; i>=1;i--){
    let gap =""
    for (let j=1;j<=4-i;j++){
        gap+=" ";

    }
    for (let p=1;p<=i; p++){
        gap += p +" "
    }
    console.log(gap)
}