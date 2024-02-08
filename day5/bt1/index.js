function check(number) {
    if (number % 2 === 0) {
        console.log(number + " là số chẵn");
    } else {
        console.log(number + " là số lẻ");
    }
}

check(2);
check(3); 
function check(number) {
        if (number % 2 == 0) {
            return "sô"+ number + " là số chẵn";
        } else {
            return "sô"+ number + " là số lẻ";        
        }
    }
var number =5 ;
document.write(check(number));