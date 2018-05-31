var test = check_divis (parseInt (process.argv[2], 10), parseInt(process.argv[3], 10));
process.stdout.write(test);

function check_divis (num1, num2) {
var result = true;
if (num1 >= num2){
if (num1%num2 != 0) result = true
else result = false;
}
else {
if (num2%num1 != 0) result = true
else result = false;
}
return result;
}

