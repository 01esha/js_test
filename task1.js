function checkPalindrom(string){	
	var newstr,	newarr,	strpal;

	if(typeof string !== "number"){
		newstr = string.toLowerCase();
	}else{
		newstr = string.toString();
	}

	newstr = newstr.replace(/[^A-Za-zА-Яа-яЁё]/g, '');
	newarr = newstr.split('');
	newarr.reverse();

	strpal = newarr.join('').replace(/\s/g, '')
	if(+strpal !== NaN){
	  +strpal;
	}
	if(strpal === newstr){
	  	return "YES";
	}else{
		return "NO";
	}
}

console.log(checkPalindrom (process.argv[2]));













