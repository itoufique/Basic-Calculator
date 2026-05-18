let currentval='';
document.querySelector('.display-box').value=currentval;
function toPerform(value){
    currentval=currentval+value
document.querySelector('.display-box').value=currentval;
}
function equalto(){
    currentval=eval(currentval)
document.querySelector('.display-box').value=currentval;
}
function clearDisplay(){
    currentval=''
document.querySelector('.display-box').value=currentval;
}
