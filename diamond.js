// 2. Number diamond for n=4 
//    1
//   2 2
//  3 3 3
// 4 4 4 4
//  3 3 3
//   2 2
//    1

for (let i =1;i<=4;i++){
    let gap ="";
    for(let j=1;j<=4 - i;j++){
        gap += " ";
    }
        for (let p =1; p<=i; p++){
            gap += i+ " ";
        }
        console.log(gap);
    }
for (let i =3; i>=1;i--){
    let gap =""
    for (let j=1;j<=4-i;j++){
        gap+=" ";

    }
    for (let p=1;p<=i; p++){
        gap += i +" "
    }
    console.log(gap)
}
