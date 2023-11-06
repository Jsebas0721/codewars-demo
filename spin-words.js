// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    //TODO Have fun :)
  //   const result = []
  //   //split the array 
  //   //check each word in array
  //   for(let word of string.split(" ")){
  //     // if word > 4
  //     if(word.length > 4){
  //       //reverse word
  //       result.push( word.split("").reverse().join(""))
  //       console.log(result)
  //     }else{
  //     //leave original    
  //       result.push(word)
  //     }
  //   }
  //   return result.join(" ");
    
    return string.split(" ").map((word) => word.length > 4 ? word.split("").reverse().join("") : word).join((" "));
  }