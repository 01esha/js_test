function checkTime (){
var sec_num = parseInt(process.argv[2], 10)+parseInt(process.argv[3], 10); 
var hours   = Math.floor(sec_num / 3600);
var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
var seconds = sec_num - (hours * 3600) - (minutes * 60);

var time = "";

if (hours > 0 ){
time += hours + " " + declOfNum(hours, ['час', 'часа', 'часов']) + " ";
}

if (minutes > 0 ){
time += minutes + " " + declOfNum(minutes, ['минута', 'минуты', 'минут']) + " ";
}

if (seconds > 0 ){
time += seconds + " " + declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
}

return time;
}

var declOfNum = function(number, titles)
{  
    var  cases = [2, 0, 1, 1, 1, 2];  
    return titles[ 
            (number % 100 > 4 && number % 100 < 20) 
            ? 
            2 
            : 
            cases[(number % 10 < 5) ? number % 10 : 5] 
    ];  
} 

console.log (checkTime ());

