const mass = ['js', 'css', 'html'];
let masContainer = document.getElementById('arr')
function masOut() {
    

masContainer.innerHTML = mass[0];

}
const mass2 = [0, 1, false, 2, undefined, '', 3, null];

const filteredmass2 = mass2.filter(function (filt){
    
    return (filt!=false  && filt!=undefined && filt!='' && filt!=null);
    
});

console.log(filteredmass2);

const mass3 = [[1,2], [1,2,3], [1,2,3,4]];

for (let i = 0; i<mass3.length; i++){
    let len = mass3[i].length;
    for (let j = 0; j<len; j++){
        if(len > 3){
            console.log(i);
        }
    }
}

