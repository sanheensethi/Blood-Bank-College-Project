
	var navbtn = document.getElementById('navbar');
	var nav = document.getElementById('navul');
	navbtn.addEventListener("click", function(){
		if(nav.style.display=='none' || nav.style.display==''){
			nav.style.display='block';
			nav.style.animation="navopen 1s";
		}else{
			nav.style.display='none';
			
		}
	});
	
	var sharebtn = document.getElementById('sharebtn');
	var share = document.getElementById('shareul');
	var li =document.getElementsByClassName('animate');
		sharebtn.addEventListener("click", function(){
			if(share.style.opacity==0){
				share.style.opacity=1;
				var x = 0;
				for(i=0;i<li.length;i++){
					li[i].style.animation="share 2s "+x+"s";
					x+=0.5;
				}
			}else{
				share.style.opacity=0;
					for(i=0;i<li.length;i++){
						li[i].style.animation="l 2s "+x+"s";
						x+=0.5;
					}
					
		}
	});