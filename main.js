const firebrickColor = document.querySelector('.firebrickColor');
const cornflowerblueColor = document.querySelector('.cornflowerblueColor');
const darkkhakiColor = document.querySelector('.darkkhakiColor');
const para = document.querySelector('.para');

function firebrickBtn() {
    para.style.color = "firebrick";
}

function cornflowerblueBtn() {
    para.style.color = "cornflowerblue";
}

function darkkhakiBtn() {
    para.style.color = "darkkhaki";
}

function pinkBtn() {
    para.style.color = "pink";
}

function display(){
    const chooseFont = document.querySelector('.chooseFont').value;
    para.style.fontFamily = chooseFont;
}