
function sumInput() {
    
    let sum = [];
    let sum1 = 0;
    for (;;) {
        let number = +prompt('Введите значение: ');
        
        if (!number) break;
        
        sum.push(number);
        sum.sort();
        sum1 += number;
    }
    
    

    alert(sum);
    alert(sum1);



console.log(sum);
}


