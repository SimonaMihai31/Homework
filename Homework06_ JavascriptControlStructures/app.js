// ex 1 / a. display in the console the numbers from 1 to 20
var inputElem1 = document.getElementById('n1');
function printNumber1to20() {
    var n = Number(inputElem1.value);
    var result = "";
    for(var i = 1; i <= 20 ; i++){
        {
            result = result + " " + i;
        }
    }
    var outputEl = document.getElementById('output1');
    outputEl.innerHTML = result;
    outputEl.style.color = 'blue';
}

// ex1 /b. display in the console the odd numbers from 1 to 20
var inputElem2 = document.getElementById('n2');
function printOddNumber1to20(){
    var n = Number(inputElem2.value);
    var result = "";
    for(var i = 1; i <= 20; i++)
    if(i%2 == 1) {
        {
            result = result + " " + i;
        }
    }
    var outputEl = document.getElementById('output2');
    outputEl.innerHTML = result;
    outputEl.style.color = 'blue';
}

// ex2 / a. compute the sum of the elements of an array and display it in the console
function sumOfElementsFromAnArray() {
    var arr = [2, 3, 5, 7, 5, 3];
    var sum = 0;
    for ( var i = 0; i <= arr.length - 1; i++)
    {
       sum = sum + arr[i];
    }
    // console.log(sum);
    var outputEl = document.getElementById('output3');
    outputEl.innerHTML = sum;
    outputEl.innerHTML = "Suma este : " + sum;
    outputEl.style.color = 'magenta';
 }
 
 //ex2 / b. compute the maximum of the elements of an array and display it in the console
//  
function maxArr() {
    var arr =  [2, 3, 5, 7, 1, 5, 3];
    var max = 0;
    for(var i = 0 ; i <=max ; i++){
        // console.log(arr[i]); 
        if(arr[i] > max ){
            max = arr[i];
        }
        console.log(max);
        var outputEl = document.getElementById('output4');
    outputEl.innerHTML = "Elementul cel mai mare este: " + max;
    outputEl.style.color = 'magenta';
    }
}
 //ex2 / c. compute how many times a certain element appears in an array
 var arr =  [2, 3, 5, 7, 5, 3]
 function findElement() {
    var count = 1;
    var m = 0;
    var item;
  for (var i=0; i<arr.length-1; i++) {
        for (var j=i; j<arr.length-1; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (count<m)
                {
                  count=m; 
                  item = arr[i];
                }
        }
        m=0;
}
        // console.log(item+" ( " +count +" times ) ") ;
    var outputEl = document.getElementById('output5');
    outputEl.innerHTML = " Element " + item+ " apare de : "+"  " +count +" ori  ";
    outputEl.style.color = 'magenta';

 }
 
// ex3 / Write a program to print Fibonacci series of the first 50 terms:
// fibo = [0, 1, 1, 2, 3, 5, 8, 13, 24 ]
    
var inputElem3 = document.getElementById('n3');
var outputEl = document.getElementById('output6');
var fibonacci_series = function fiboN50(n) {
  if (n===1) 
           {
              return [0, 1];
           } 
  else 
  {
    var sir = fibonacci_series(n - 1);
    sir.push(sir[sir.length - 1] + sir[sir.length - 2]);
    return sir;
  }
  
}
     console.log(fibonacci_series(50));

//am facut doua variante de cod
function fiboN50() {
    var i;
    var fibo=[];
    fibo[0]=0;
    console.log(fibo[i]);
    fibo[1]=1;
    console.log(fibo[i]);
    for (i=2; i <= 50; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        console.log(fibo[i]);
    }
    // aici imi arata urat output in paragraf chiar daca i-am dat style... 
    //cu width in interiorul div-ului parinte...

    //  var outputEl = document.getElementById('output6');
    //  outputEl.innerHTML = fibo; 
    //  outputEl.style.color = 'blue';
}

// ex4 // Write a program that prints the numbers from 1 to 100.
    //   But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
    //   For numbers which are multiples of both three and five print “FizzBuzz”.


var inputElem3 = document.getElementById('n4');
function printNumber1to100() {
    var n = Number(inputElem3.value);
    var result ="";
    var i=0;
    var resultParagraph= document.getElementById('output7')
    for ( i = 1; i <= 100 ; i++){
         if (i%3 == 0 && i%5 == 0) {
            result = result +" FizzBuzz ";
            }
        else if (i%3 ==0  ) {
            result = result +" Fizz ";
        }
        else if (i%5 == 0 ) {
            result = result +" Buzz ";
        }
        else
        {
            result = result +" " + i;
            // console.log(result);
        }
    
    var resultParagraph = document.getElementById('output7');
    resultParagraph.innerHTML = result;
    resultParagraph.style.color = 'magenta';
    }
}

            ///////happy end//////
            ///va urma.../////

