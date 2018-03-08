usersData = [
			{"id":1,"name":"Sanheen Sethi","email":"sanheensethi","password":"134116","mobile":"9876354151","bg":"A+"},
			{"id":1,"name":"Sanheen Sethi","email":"sanheensethi37659@gmail.com","password":"134116","mobile":"9876354151","bg":"A+"},		
			{"id":1,"name":"Sanheen Sethi","email":"sanheensethi37659@gmail.com","password":"134116","mobile":"9876354151","bg":"A+"},
			{"id":1,"name":"Sanheen Sethi","email":"sanheensethi37659@gmail.com","password":"134116","mobile":"9876354151","bg":"A+"},
			{"id":1,"name":"Sanheen Sethi","email":"sanheensethi37659@gmail.com","password":"134116","mobile":"9876354151","bg":"A+"},	
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