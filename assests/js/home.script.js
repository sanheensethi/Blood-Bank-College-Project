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
STATE = statekeys();
for(var i in STATE)
{
var option = document.createElement("option");
option.text = states[STATE[i]];
option.value = STATE[i];
var select = document.getElementById("STATE");
select.appendChild(option);
}

function citiescall(){
	var state = document.getElementById('STATE').value;
	var city = cities[state];
	for(var i in city)
	{
	var option = document.createElement("option");
	option.text = city[i];
	option.value = city[i];
	var select = document.getElementById("CITY");
	select.appendChild(option);
	}
}

function remopt(){
	document.getElementById("CITY").options.length = 0;
	citiescall();
}

slogans = ["Give food, - feel good for a day,Give blood, and feel good forever, Okay?","A bottle of blood is all the fare For you, who shows you really care!","A SMALL DROP OF BLOOD, A GREAT HOPE 4 LIFE","Life of some patients is resting on a fraction of hope in quest of your gift of love.","Accidents and medical emergencies don’t take holidays—we need blood every minute, every day of the year.","Please donate blood,even you may need it some day.so why not start donating today.","At 18 you grow up. At 18 you drive. At 18 you give blood to keep someone alive.","You don’t have to have a medical degree to save a life. Just a fair degree of humanity. Give Blood. Save Life."];
document.getElementById('quote').innerHTML=slogans[0];
function quote(){
	j = Math.ceil(Math.random()*(slogans.length-1));
	console.log(j);
	document.getElementById('quote').innerHTML=slogans[j];
}
setInterval('quote()',2500);

function openNotify(){
	notifyContent = document.getElementById('notifyCon');
	if(notifyContent.style.display==false || notifyContent.style.display=='none' ){
		notifyContent.style.display="block";
		notifyContent.style.animation="displayBlock .5s 1 linear forward";
	}else{
		notifyContent.style.animation="displayNone .5s 1 linear forward";
		notifyContent.style.display="none";
	}
}