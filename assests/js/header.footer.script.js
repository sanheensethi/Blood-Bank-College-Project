/*
	MIT License
	
	Copyright (c) 2018 Sanheen Sethi
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

	@package BloodBank
	@Autor Sanheen Sethi
	@Date 08-03-2018
	@Time 7:30 AM
*/
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