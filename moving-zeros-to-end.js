

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    //loop through array and check values
   
    let newArray = [];
    let countZeros = 0;
    for(let i = 0; i < arr.length; i++){
  //   if its a 0 push it to the back of the array
      if(arr[i] !== 0){
        newArray.push(arr[i])
      }else{
        countZeros++;
      }
    }
    for(let j = 0; j < countZeros; j++){
      newArray.push(0)
    }
    //returns a new array
    return newArray;
  }