//create a list of strings, to hold 8 ball responses
var list = ["yes.",
            "no!",
            "Try again.",
            "Concentrate and try again.",
            "signs point to yes.",
            "My Reply is no.",
            "Don't count on it.",
            "Reply hazy, try again.",
            "I don't know bro.",
            "Okay Then.",
            "The children are laughing."];
var imageState = "front";

//this function outputs a random number
function randomNum(){
    return Math.floor(Math.random() * 10);
}
//this function responds with a fortune
//when click the magic 8 ball image
function shakeMagic8Ball(){

    //if the picture is of the front side...
    if(imageState == "front"){
      //grab image by id
    document.getElementById("magic8ball").src="magic8ball2.jpg";

      //grab the results
    document.getElementById("results").innerHTML=list[randomNum()];

    imageState = "back";
    }
    //else, it's the picture of the back side...
    else{
        //go back to the front picture
        document.getElementById("magic8ball").src="magic8ball.jpg";

        //change results paragraph to say something to promt the user
        //to shake the 8 ball again
        document.getElementById("results").innerHTML="Click the 8 ball to exspose yourself!";

    imageState = "front";
    }

    //alert(randomNum());
}
