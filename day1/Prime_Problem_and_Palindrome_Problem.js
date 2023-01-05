//code for verify for prime number.

let num=13
 let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){                                              
            count++;
        }
        
    }
    if(count==2){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
//code for verifing the Palindrome problem.

let str="bambam";
let N=str.length;
let newStr="";
    for(let i=N-1; i>=0; i--){
      newStr=newStr+str[i];
    }
   if(newStr==str){
       console.log("Yes");
   }
   else{
       console.log("No")
   }
