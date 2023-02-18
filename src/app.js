const a_oldalElem = document.querySelector('#a_oldal');
const b_oldalElem = document.querySelector('#b_oldal');
const c_oldalElem = document.querySelector('#c_oldal');
const calcButton = document.querySelector('#calcButton');
const terfogatElem = document.querySelector('#terfogat');

calcButton.addEventListener('click', () => {
    
    let a_oldal = Number(a_oldalElem.value);
    let b_oldal = Number(b_oldalElem.value);
    let c_oldal = Number(c_oldalElem.value);
    let terfogat = calcTerfogat(a_oldal, b_oldal, c_oldal);
    console.log(terfogat);
    terfogatElem.value = terfogat;

});

function calcTerfogat(a_oldal, b_oldal, c_oldal) {
    let terfogat = a_oldal * b_oldal * c_oldal;
    return terfogat;
}