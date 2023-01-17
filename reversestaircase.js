// 1. Reverse number staircase
//       1
//     2 1
//   3 2 1
// 4 3 2 1
// For n = 4


  for (let i =4; i >= 1;i--){
    let ans = "";
    for(let j=1;j <=4; j++){
        if(j >= i){
            ans += i;
        }
        else{
            ans += " ";
        }
    }
    console.log(ans);
  }

