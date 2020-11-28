
numbers = [];
operations = [];
var unit;
var i=0;
var j=0;
var k=0;
var u=0;
var result = 0;

function num(n){
     unit=n;
     u++;
     // console.log(u);
      
      if (u==1){
           clr();
           document.getElementById('screen').innerHTML+= unit;
          // console.log(document.getElementById('screen').innerHTML);
          }
	
     else {
          document.getElementById('screen').innerHTML+= unit;
          // console.log(document.getElementById('screen').innerHTML);

     }    
}


 function display(){

       numbers[i] = parseFloat(document.getElementById("screen").innerHTML);
     //   console.log(numbers);

     //   console.log(operations[j-1]);

       if(operations[j-1]==1){
            result = numbers[i-1] + numbers[i];
       }

       else if (operations[j-1] == 2){
          result = numbers[i-1] - numbers[i];
     }
     else if (operations[j-1] == 3){
          result = numbers[i-1] * numbers[i];
     }
     else{
          result = numbers[i-1] / numbers[i];
     }


     document.getElementById('screen').innerHTML = result;

     numbers.pop();
     numbers.pop();
     // console.log(numbers);                      
     // console.log("j"+j);
     numbers.push(result); 
     // console.log(numbers);
     i--;
     // console.log("i"+i);

 }



function clr(){	
	document.getElementById('screen').innerHTML="";
	
}


function operation(x){

     operations[j]= x;
     // console.log("operation is"+operations[j]);
     // console.log(typeof(operations[i]));
      j++;
     //  console.log("j"+j);     

	 num1 = document.getElementById('screen').innerHTML;
      num1 = parseFloat(num1);
      
      clr();
     
     numbers[i]= num1;
     console.log("number is"+numbers[i]);
     console.log(typeof(numbers[i]));
     i++;
     console.log("i"+i);
     clr();
     
    if(numbers.length >=2){
         console.log("yes");
         console.log("operations is"+operations[j-1]);

       for (k=0; k < numbers.length-1;k++){
	
               if(operations[j-2] == 1){
                    
                    result = numbers[i-1] + numbers[i-2];
                    console.log("result"+result);
                    console.log(typeof(result))
          
                    console.log(result);
                    document.getElementById("screen").innerHTML = result;
                    u=0;
          
                    console.log("j"+j);
                    numbers.pop();
                    numbers.pop();
                    console.log(numbers);
                    
                    
                    console.log("j"+j);
                    numbers.push(result); 
                    console.log(numbers);
                    i--;
                    console.log("i"+i);

               }

               else if(operations[j-2]==2){

                    result = numbers[i-2] - numbers[i-1];
                    console.log("result"+result);
                    
                    document.getElementById("screen").innerHTML = result;
                    u=0;
                    
                    console.log("j"+j);
                    numbers.pop();
                    numbers.pop();
                    console.log(numbers);

                    console.log("j"+j);
                    numbers.push(result);
                    i--;
                    console.log("i"+i);
               }

               else if(operations[j-2]==3){

               result = numbers[i-2] * numbers[i-1];
                console.log("result"+result);
                
                document.getElementById("screen").innerHTML = result;
                u=0;
                
                console.log("j"+j);
                numbers.pop();
                numbers.pop();
                console.log(numbers);

                console.log("j"+j);                   
                numbers.push(result);
                i--;
                console.log("i"+i);

               }

               else{                        
                    result = numbers[i-2] / numbers[i-1];
                    console.log("result"+result);
                    
                    document.getElementById("screen").innerHTML = result;
                    u=0;
                    
                    console.log("j"+j);
                    numbers.pop();
                    numbers.pop();
                    console.log(numbers); 

                    console.log("j"+j); 
                    numbers.push(result);
                    i--;
                    console.log("i"+i);
                                   
               } 

          }    
      
     }
	
	
};


function cancel(){

     console.clear();
     numbers = [];
     operations = [];
      unit=0;
      i=0;
      j=0;
      k=0;
      u=0;
      result=0;
      document.getElementById("screen").innerHTML="";

}

