// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr ( string ) {
    var arrayOfStrings = string.split (' ');
    string="";
    for ( var i = arrayOfStrings.length-1; i > 0; i--){
        string = string . concat (arrayOfStrings[i] , " ")
    }
    string=string. concat ( arrayOfStrings [0] )
    return string;
}