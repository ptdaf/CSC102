// game function
function play(){
     // var x with random gen from 1 to 20
    var x = Math.floor((Math.random()*20)+1);
    // var x with random gen from 1 to 10
   var y = Math.floor((Math.random()*10)+1);
   // var car with som of x and y
   var car = x + y;

   // if car equals 11 or 21 code runs
   if (car==11 || car ==21){
       // getelementById that changes p tag with id push
       document.getElementById("push").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "You lose!";
   } // else if x equals y and x is an even number code runs
   else if (x ==y && x%2 ==0 ){
        // getelementById that changes p tag with id push
       document.getElementById("push").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "You win!";
   } // Runs if none of the previous conditions are met
   else{
        // getelementById that changes p tag with id push
       document.getElementById("push").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "you pushed!";
   }
}
