var character = 'o';

//This function handles the onclick event
function turn(location){

  //update box with character, if box is empty
  if(document.getElementById(location).innerHTML == ""){

    //update results div with feedback
    document.getElementById("results").innerHTML = "It's " + character + "'s turn!";

    //switch between x and o
    if(character == 'x'){
        character = 'o';
    }
    else{
        character = 'x';
    }

        document.getElementById(location).innerHTML = character;
  }

}
