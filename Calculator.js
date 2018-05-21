var emojis = [
	'&#128525;','&#128513;','&#128553;','&#128567;','&#128123;','&#128546;','&#128540;','&#128545;','&#128531;','&#128519;','&#128169;','&#128560;','&#128527;','&#128521;','😁','😔','😌','😒','😞','😣','😢','&#128514;','😭','😪','😥',
];

function randomNum(){
	return Math.floor(Math.random() * 25 + 1);
}

function getEmoji() {
	document.getElementById("results").value=emojis[randomNum()];
	//document.getElementById("results").value="test";
}
