function showregisform() {
allcontent = document.getElementById('allcon');
loginfrm = document.getElementById('loginform');
regisfrm = document.getElementById('regisform');
if(allcon.style.display=='block' || allcon.style.display==false){
	allcon.style.display="none";
	loginfrm.style.display="none";
	regisfrm.style.display="block";
}
	}
	 function showloginform() {
allcontent = document.getElementById('allcon');
loginfrm = document.getElementById('loginform');
regisfrm = document.getElementById('regisform');
if(allcon.style.display=='block' || allcon.style.display==false){
	allcon.style.display="none";
	loginfrm.style.display="block";
	regisfrm.style.display="none";
}
	}