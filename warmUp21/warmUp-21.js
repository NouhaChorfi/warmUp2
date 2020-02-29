// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function balloonInstances ( string ) {

    var ballonSplit='balloon'.split('');
    var splittedString=string.split('');
    var counter=0
    var numberOfOccurance=0;

    
    for ( var i=0 ; i<ballonSplit.length ; i++){
        
        for ( var j=0 ; j<splittedString.length ; j++){
            if( ballonSplit[i] === splittedString[j] && counter<7){
                counter+=1
                splittedString.splice(j,1);
                console.log("ee"+counter)
                if(j<splittedString.length){
                    j=j-1
                }
            }
             else if( counter === 7 ){
                 counter=0
                numberOfOccurance+=1
                console.log("zz"+numberOfOccurance)
            }
        }
       
    }

   return numberOfOccurance
}