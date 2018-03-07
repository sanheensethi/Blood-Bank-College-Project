var states = {
"AP":"Andhra Pradesh",
"AR":"Arunachal Pradesh",
"AS":"Assam",
"BR":"Bihar",
"CG":"Chhattisgarh",
"Chandigarh":"Chandigarh",
"DN":"Dadra and Nagar Haveli",
"DL":"Delhi",
"GA":"Goa",
"GJ":"Gujarat",
"HR":"Haryana",
"HP":"Himachal Pradesh",
"KA":"Karnataka",
"KL":"Kerala",
"MP":"Madhya Pradesh",
"MH":"Maharashtra",
"MN":"Manipur",
"ML":"Meghalaya",
"MZ":"Mizoram",
"NL":"Nagaland",
"OR":"Orissa",
"PB":"Punjab",
"PY":"Pondicherry",
"RJ":"Rajasthan",
"SK":"Sikkim",
"TN":"Tamil Nadu",
"TE":"Telangana",
"TR":"Tripura",
"UP":"Uttar Pradesh",
"UK":"Uttarakhand",
"WB":"West Bengal"
}
j=0;
function statekeys(){
	var stkeys=[];
	for(var i in states){
		stkeys[j] = i;
		j++;
	}
	return stkeys;
}