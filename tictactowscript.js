var character = 'o';

//This function handles the onclick event
function turn(location){

    //switch between x and o
    if(character == 'x'){
        character = 'o';
    }
    else{
        character = 'x';
    }

    document.getElementById(location).innerHTML = character;
}
