//1.print 1-135  

//for (var i=1;i<=135; i++ ){
 //   console.log(i)
//}

 //// Diagram
//i=1 round code print ; 1
//i=2 round code print ; 2
//i=3 round code print ; 3
//....
//....
//i=135 round code print ; ....135
//i=136 stop print becouse 136>135
 


//2.Print Odd Numbers 1 - 135

//for (var i=1; i<=135; i++){
//    if(i%2!=0)
//   console.log(i)
 //}

//// Diagram
//i%1!=1 round conde print ; 1 is Odd number
//i%2!=0 round conde print ; the loop will not is not Odd number
//i%3!=3 round conde print ; 3 is Odd number
//i%4!=0 round conde print ; the loop will not is not Odd number
//.....
///i%135!=135 round conde print ; 135 is Odd number
///i%136!=0   stop round code print becouse 136>135


//3.Sum of Printed Numbers


//let x=0
//for(i=0;i<=135;i++){
 //     x=x+i
//console.log(`Number is: ${i} Sum:${x}`)
    
 //}

 //// Diagram
 // i=0 x=0 round code print ; Number is: 0 Sum:0
 // i=1 x=1 round code print ; Number is: 1 Sum:1
 // i=2 x=3 round code print ; Number is: 2 Sum:3
 // i=3 x=6 round code print ; Number is: 3 Sum:6
 //....
 // i=135 x=9180 round code print ; Number is: 135 Sum:9180
 // i=136 stop round code becouse 136>135


 ///4.Print the elements of an array
 //var x= [1,4,2,12]
     
   //console.log(x)

 //// Diagram
// round code print the elements of an array;[1,4,2,12]

//5. Find Max
 // var  X = [2,-3,-1,0,99,12,-1];
 
  //  console.log(Math.max(...X));


 //// Diagram
// use methoud Math.max() print array max number;99



// 6.Get Average
 
//var X= [2, 1, 3];
  //  total = 0;
//for(var i = 0; i <X.length; i++){
//    total += X[i];
//}
//var avg = total / X.length;
//console.log(avg)
 
//// Diagram
///(avg) round code (0+=2,1,3) total is 6  (6/3) x.length is 3 avg output ; 2


//7. Eliminate the Negatives
  //var X = [2,-1,4,-3];

    
  //var X = [2,-1,4,-3];
  //   for(i=0;i<X.length;i++){
   //  if(X[i]<0){
   //  X[i]=0;
    // }
    //}
  
  //console.log(X);
  ///Diagram
// x[i]<0 is negative number in X
// x[i]=0 is negative number in  X =0
// round conde  x output ;[2,0,4,0]

// 8. Number to String
  
 //var X = [1,-4,0,-1];
 // for(i=0;i<X.length;i++){
  // if(X[i]<0){
  // X[i]="Turing";
  // }
 // }
 // console.log(X);

///Diagram
// x[i]<0 is negative value in X
// x[i]="Turing" is negative number to stiring  output ;x="Turing"
//round code out put is [ 1, 'Turing', 0, 'Turing' ]
