//create a list of strings, to hold 8 ball responses
var list = ["yes.",
            "no!",
            "Try again.",
            "Concentrate and try again.",
            "signs point to yes.",
            "My Reply is no.",
            "Don't count on it.",
            "Reply hazy, try again."];


//this function responds with a fortune
//when click the magic 8 ball image
function shakeMagic8Ball(){
    //alert("viewer discretion is advised");

    //grab image by id
    document.getElementById("magic8ball").src="magic8ball2.jpg"

    //grab the results
    document.getElementById("results").innerHTML=list[5];

   //alert(list[5]);
}
