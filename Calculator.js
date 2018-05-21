var emojis = [
	'&#128525;','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥',
];

function randomNum(){
	return Math.floor(Math.random() * 25 + 1);
}

function getEmoji() {
	document.getElementById("results").value=emojis[randomNum()];
	//document.getElementById("results").value="test";
}
