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