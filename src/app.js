let baseInput = document.querySelector('#base')
let heightInput = document.querySelector('#height')
let areaInput = document.querySelector('#area')
let calcInput = document.querySelector('#calc')
//console.log(baseInput, heightInput,areaInput, calcInput);
calcButton.addEventListener('click',()=>{
    workInput();
})

function workInput(){
    let base = Number(baseInput.value)
    let height = Number(heightInput.value)
    let area = calcTriangleArea(base,height)
    areaInput.value = area;
}

function calcTriangleArea(base, height){
    return base * height / 2;
}