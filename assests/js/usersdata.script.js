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
usersData = [
			{"name":"Sanheen Sethi","email":"sanheensethi","password":"3911","mobile":"9876354151","bg":"A+"},
			{"name":"Mandeep Dhyani","email":"mandeep","password":"3907","mobile":"9876354151","bg":"A+"},		
			{"name":"Sanheen Sethi","email":"himanshu","password":"3924","mobile":"9876354151","bg":"A+"},
			{"name":"Sanheen Sethi","email":"manish","password":"3905","mobile":"9876354151","bg":"A+"},
			{"name":"Sanheen Sethi","email":"kishore","password":"3925","mobile":"9876354151","bg":"A+"},	
		];
		
function redirect(){
			email = document.getElementById('loginemail');
			password = document.getElementById('loginpassword');
			email = email.value;
			password = password.value;
			console.log(email);
			console.log(password);
			for(i in usersData){
				console.log(usersData[i]['email']==email);
				console.log(usersData[i]['password']==password);
				if(usersData[i]['email']==email && usersData[i]['password']==password){
					window.open("home.html");
					break;
				}else{
					continue;
				}
			}
			if(i==usersData.length){
				alert("invalid Username or Password");
			}
		}