function checkDate (){
var Date1 = new Date (process.argv[4], monthConvert(process.argv[3]), process.argv[2]);
var Date2 = new Date (process.argv[4], 11, 31);
var Days = Math.floor((Date2.getTime() - Date1.getTime())/(1000*60*60*24));
return Days;
}

function monthConvert (monthName){
switch(monthName) {
  case 'января':  
    return 0;
    break;
  case 'февраля':  
    return 1;
    break;
  case 'марта':  
    return 2;
    break;
   case 'апреля':  
    return 3;
    break;
    case 'мая':  
    return 4;
    break;
    case 'июня':  
    return 5;
    break;
    case 'июля':  
    return 6;
    break;
    case 'августа':  
    return 7;
    break;
    case 'сентября':  
    return 8;
    break;
    case 'октября':  
    return 9;
    break;
    case 'ноября':  
    return 10;
    break;
    case 'декабря':  
    return 11;
    break; 
	}
}

console.log (checkDate());
