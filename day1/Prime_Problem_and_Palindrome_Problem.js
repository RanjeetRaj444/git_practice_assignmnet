//code for verify for prime number.

let num=13
 let count=0;
    for(let i=2;i<num;i++){
        if(num%1==0&&num%num==0){                                              --!--
            count++;
        }
        
    }
    if(count>=1){
        console.log("No");
    }
    else{
        console.log("Yes");
    }

//code for verifing the Palindrome problem.

let str="bambam";
let N=str.length;
let newStr="";
    for(let i=0;i<N;i++){                               --!--
        newStr=newStr+str[i];
    }
   if(newStr==str){
       console.log("Yes");
   }
   else{
       console.log("No")
   }
