var list = ["images/kenbone.jpg","images/kenbone2.jpg", "images/kenbone3.jpg"];

var imagevalue = 0;

function Previous(){

	if (imagevalue > 0){
		imagevalue = imagevalue -1;
		document.getElementById("pics").src = list[imagevalue];
	}
}

function Next(){

	if (imagevalue <2){
		imagevalue=imagevalue +1;
		document.getElementById("pics").src = list[imagevalue];
	}
}
