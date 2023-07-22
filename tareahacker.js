// RESOLUCION EJERCICIO 1 DE DIA 1//

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
let pos = 0;
let neg = 0;
let zeros = 0;

for (let i = 0 ; i<arr.length; i++) {
    if (arr[i]>0)   
        pos++;
    else if (arr[i]<0)  
        neg++;
    else 
        zeros++;     
   
   }
    
    console.log((pos/arr.length).toFixed(6));
    console.log((neg/arr.length).toFixed(6));
    console.log((zeros/arr.length).toFixed(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}


//RESOLUCION EJERCICICIO 2 DE DIA 1//


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b) => a-b)
    let min = 0, max = 0;
    for (let i = 0; i < arr.length-1; i++){
        min += arr[i]
    }
    for (let j = 1; j < arr.length; j++){
        max += arr[j]
    }
    
    console.log(min, max)

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}



//RESOLUCION EJERCICIO 3 DE DIA 1//

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
let result ="";
    let hours =s.slice(0,2)
    let min =s.slice(3,5)
    let sec =s.slice(6,8)
    
    if(s.includes("AM")){
        if(hours === "12"){hours = "00"}    
    }
    else{
        if(hours < 12 && hours > 0){hours =parseFloat(hours)+12}
    }
 return result = hours+":"+min+":"+sec
 
}

 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}







/*---------------------------------------------------------------------------*/

//RESOLUCION EJERCICIO 1 DE DIA 2//

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let lonely = 0;
    a.forEach(function(val){
        (a.indexOf(val) == a.lastIndexOf(val))? lonely = val:null;
    });
    return lonely;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}







//RESOLUCION EJERCICIO 2 DIA 2//

 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

 function diagonalDifference(arr) {
    
    var number = arr[0].length;
    var leftSum = 0;
    var rightSum = 0;
    
    for(var i = 0, j = number - 1; i < number; i++ , j--) {
        
        leftSum += arr[i][i];
        rightSum += arr[i][j]
    }
    
    let difference = leftSum - rightSum
    
    return Math.abs(difference)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}




//EJERCICIO 3 DE DIA 2//

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  const frequencyArray = Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    frequencyArray[value]++;
  }

  return frequencyArray;
}





function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}



 /*---------------------------------------------------------------------------*/


 //EJERCICIO 2 DE DIA 3//

 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
    if( m == 1 || n%2 == 0){
        return 2;
        } else {
            return 1;
        }   
  
  }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const result = towerBreakers(n, m);

        ws.write(result + '\n');
    }

    ws.end();
}



  //EJERCICIO 3 DE DIA 3// 


 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    const message = Array.from(s);
    const n = k;
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const alphabetChanged = [...alphabet];
    
    for(let i=0; i<n; i++){
        let change = alphabetChanged.shift();
        alphabetChanged.push(change);
    }
    
    let secret = [];
    let encrypted = '';
    
    message.forEach((val)=>{
        let idx = alphabet.indexOf(val.toLowerCase());
        
      if(val.toUpperCase()!=val.toLowerCase()){
          if(val!=val.toLowerCase()){
              secret.push(alphabetChanged[idx].toLocaleUpperCase());
          } else {
              secret.push(alphabetChanged[idx])
          }
      }else{
          secret.push(val);
      }  
    });
encrypted = secret.join('');
return encrypted

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/

//EJERCICIO 1 DE DIA 4//

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
  
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('').sort().join('');
  }

  
  for (let col = 0; col < grid[0].length; col++) {
    let columnChars = [];
    for (let row = 0; row < grid.length; row++) {
      columnChars.push(grid[row][col]);
    }
    for (let i = 0; i < columnChars.length - 1; i++) {
      if (columnChars[i] > columnChars[i + 1]) {
        return "NO";
      }
    }
  }

  return "YES";
}


const grid = [
  'ebacd',
  'fghij',
  'olmkn',
  'trpqs',
  'xywuv'
];

console.log(gridChallenge(grid)); 


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}


  
  
  //EJERCICIO 2 DE DIA 4//

  'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
  if (n.length === 1) {
    return parseInt(n);
  } else {
    let sum = 0;
    for (let digit of n) {
      sum += parseInt(digit);
    }
    const newN = String(sum * k);
    return superDigit(newN, 1);
  }
}

 
const n = "9875";
const k = 4;
const result = superDigit(n, k);
console.log(result); 


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}

  

// EJERCICIO 3 DE DIA 4 //


//------------------------------------------------------------------------------------------------------------

// EJERCICIO 1 DE DIA 5//

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(headA, headB) {
  if (!headA) return headB;
  if (!headB) return headA;

  let mergedHead = null;
  let current = null;

  while (headA && headB) {
    if (headA.data < headB.data) {
      if (!mergedHead) {
        mergedHead = headA;
        current = headA;
      } else {
        current.next = headA;
        current = current.next;
      }
      headA = headA.next;
    } else {
      if (!mergedHead) {
        mergedHead = headB;
        current = headB;
      } else {
        current.next = headB;
        current = current.next;
      }
      headB = headB.next;
    }
  }

  if (headA) {
    current.next = headA;
  }

  if (headB) {
    current.next = headB;
  }

  return mergedHead;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let llist3 = mergeLists(llist1.head, llist2.head);

        printSinglyLinkedList(llist3, " ", ws)
        ws.write("\n");
    }

    ws.end();
}




//EJERCICIO 2 DE DIA 5//




// EJERCICIO 3 DE DIA 5//

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
  const stack = [];

  
  const bracketPairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    
    if (bracket === '{' || bracket === '[' || bracket === '(') {
      stack.push(bracket);
    } else {
     
      const lastOpeningBracket = stack.pop();
      if (bracket !== bracketPairs[lastOpeningBracket]) {
        return 'NO'; 
      }
    }
  }

 
  return stack.length === 0 ? 'YES' : 'NO';
}


const input = `3
{[()]}
{[(])}
{{[[(())]]}}`;

const strings = input.trim().split('\n').slice(1);


for (const s of strings) {
  const result = isBalanced(s);
  console.log(result);
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}


//-------------------------------------------------------------------------------//


//EJERCICIO 1 DE DIA 6//

// EJERCICIO 2 DE DIA 6//

// EJERCICIO 3 DE DIA 6//

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return root;
  }

  bubbleUp(index) {
    const parentIdx = Math.floor((index - 1) / 2);

    if (parentIdx >= 0 && this.heap[index] < this.heap[parentIdx]) {
      [this.heap[index], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[index],
      ];
      this.bubbleUp(parentIdx);
    }
  }

  bubbleDown(index) {
    const leftChildIdx = 2 * index + 1;
    const rightChildIdx = 2 * index + 2;
    let smallest = index;

    if (
      leftChildIdx < this.heap.length &&
      this.heap[leftChildIdx] < this.heap[smallest]
    ) {
      smallest = leftChildIdx;
    }

    if (
      rightChildIdx < this.heap.length &&
      this.heap[rightChildIdx] < this.heap[smallest]
    ) {
      smallest = rightChildIdx;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.bubbleDown(smallest);
    }
  }
}

function cookies(k, A) {
  const minHeap = new MinHeap();
  A.forEach((sweetness) => minHeap.push(sweetness));

  let operations = 0;

  while (minHeap.size >= 2 && minHeap.heap[0] < k) {
    const leastSweet = minHeap.pop();
    const secondLeastSweet = minHeap.pop();
    const combinedSweetness = leastSweet + 2 * secondLeastSweet;
    minHeap.push(combinedSweetness);
    operations++;
  }

  return minHeap.heap[0] >= k ? operations : -1;
}


const k = 7;
const A = [1, 2, 3, 9, 10, 12];
console.log(cookies(k, A)); 


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    const result = cookies(k, A);

    ws.write(result + '\n');

    ws.end();
}









