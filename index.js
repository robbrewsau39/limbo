// Sample RNG from 1-128
function numgen() {
    // Defining minimum and maximum values
    const min = 1;
    const max = 128;
    // Creates a variable that is a rounded randomly generated number between the min and max
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    // Creates a text node
    document.createTextNode(rand); 
    // Replaces a text variable with a random number
    document.getElementById("result-num").innerHTML = rand;
}