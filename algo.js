//fibonacci sequence 
let fibo = [0,1]

function fibonacci(num){
     
     for(let i = 2; i < num; i++){     //O(n) linear complexity
        fibo.push(fibo[i-2]+fibo[i-1])
     }
     console.log(fibo)
}

//(fibonacci(2))
//FACTORIAL
function factorial(n){
   let fact = 1 ;
   for(let i = 2;i <= n; i++){
      fact *= i
   }

   console.log(fact)
}

//factorial(5)



//PRIME NUMBER 

function isPrime(n){
   let factors = 0 
   for(let i = 2 ; i <= Math.sqrt(n); i++){
      if( n % i == 0){
         factors += 1 
      }
   }
   if(factors >= 1){
      return "Not Prime"
   }else{
      return "prime"
   }
}

//console.log(isPrime(11))

//POWER OF 2 

function isPowerOfTwo(n){
   if(n < 1){
      return false
  }

  while( n > 1){
   if(n % 2 != 0){
      return false
   }
   n = n / 2
  }

  return true
}

// console.log(isPowerOfTwo(256))

function isPowerOfTwo(n){
   if(n < 1){
      return false 
   
   }

   return (n & (n-1)) === 0
}

//console.log(isPowerOfTwo(1024))

// Recursuve fibonacci

function fibonacciRecur(n){

     if(n < 2){
      return n
     }
     return fibonacciRecur(n-1) + fibonacciRecur(n-2);
}

//console.log(fibonacciRecur(6))


//RECURSIVE FACTORIAL 

 function recursiveFactorial(n){

   if(n === 0){
      return 1 
   }

   return n * recursiveFactorial(n-1)
 }

 //console.log(recursiveFactorial(5))
 let a = [1,2,3,4,5,6,7,8,9,10];

 function linearSearch(a,n){

   for(let i = 0; i < a.length; i++){
      if(a[i] === n){
         return i
      }
      return -1
   }
 }

//console.log(linearSearch(a,11))
 

 //BINARY SEARCH
 

function binarySearch(arr,target){
     let leftIndex = 0
     let rightIndex = arr.length-1

     while(leftIndex <= rightIndex){
      let middleIndex = Math.floor((leftIndex+rightIndex)/2)
      
      if(target === arr[middleIndex]){
         return middleIndex
      }

      if(target < arr[middleIndex]){
         rightIndex = middleIndex - 1
      }else{
         leftIndex = middleIndex + 1
      }

     }
    return -1
  
}
//console.log(arr)
//console.log(binarySearch(arr,11))

function recursiveBinarySearch(arr,target){

   return search(arr,target,0,arr.length-1)
}
   function search(arr,target,leftIndex,rightIndex){
      let middleIndex = Math.floor((leftIndex + rightIndex)/2)
         if(leftIndex > rightIndex){
            return -1
         }
         if(target === arr[middleIndex]){
            return middleIndex
         }

         if(target < arr[middleIndex]){
            return search(arr,target,leftIndex,middleIndex-1)
         }else{
            return search(arr,target,middleIndex+1,rightIndex)
         }
       
   }






//console.log(recursiveBinarySearch(arr,11))


//SORTING ALGORITHM


function bubbleSort(arr){

  let swapped;

  do{
   swapped = false
   for(let i =0; i < arr.length - 1; i++){
      if(arr[i] < arr[i+1]){
        let temp = arr[i+1]
        arr[i+1] = arr[i]
        arr[i] = temp
        
        swapped = true
     }
  }
 } while(swapped)

}
//bubbleSort(arr)
//console.log(arr)

//INSERTION SORT 


function InsertionSort(arr){
    for(let i = 1; i < arr.length;i++){
      let numtobeSorted = arr[i]
      let j = i - 1
      while(j >= 0 && arr[j] > numtobeSorted){
         arr[j+1]= arr[j]
         j -= 1
      }
      arr[j+1] = numtobeSorted
    }
}


//InsertionSort(arr)

function quickSort(arr){
   if(arr.length < 2){
      return arr 
   }
   let pivot = arr[arr.length-1]
   let left = []
   let right = []
   for(let i =0; i< arr.length - 1;i++){
      if(arr[i] < pivot){
         left.push(arr[i])
      }else{
         right.push(arr[i])
      }
   }

   return [...quickSort(left),pivot,...quickSort(right)]
}

let arr = [0,5,6,7,3,4,2,1,9,8,10]
//console.log(quickSort(arr))

function mergeSort(arr){
   if(arr.length < 2){
      return arr
   }

   const mid = Math.floor(arr.length/2)
   const left = arr.slice(0,mid);
   const right = arr.slice(mid)

   return merge(mergeSort(left),mergeSort(right))
}

function merge(leftarr,rightarr){
   let sortedArray = []
   while(leftarr.length && rightarr.length){
      if(leftarr[0] <= rightarr[0]){
         sortedArray.push(leftarr.shift())
      }else{
         sortedArray.push(rightarr.shift())
      }
   }

   return [...sortedArray,...leftarr,...rightarr]
}
 
//let arr = [0,5,6,7,3,4,2,1,9,10]
//console.log(mergeSort(arr))

const arr1 = [1,2]
const arr2 = [4,5]

const cartesianProduct = []

for(let i = 0; i< arr1.length;i++){
     for(let j = 0;j< arr2.length;j++){
        cartesianProduct.push([arr1[i],arr2[j]])
     }
}
//console.log(cartesianProduct)

//climbing stair case problem 

function climbingStairCase(n){
   const noOfWays = [1,2]
   for(let i = 2; i <= n;i++){
      noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
   }

   return noOfWays[n-1]
}


//console.log(climbingStairCase(5))

//TOWER OF HANOI 

function towerOfHanoi(n,fromRod,toRod,usingRod){
   if(n===1){
      console.log(`move disk 1 from ${fromRod} to ${toRod}`)
      return 
   }

   towerOfHanoi(n-1,fromRod,usingRod,toRod);
   console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
   towerOfHanoi(n-1,usingRod,toRod,fromRod)
}