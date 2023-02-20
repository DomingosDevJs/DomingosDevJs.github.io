var buttonL = document.querySelector('.button-arrow.-right');
var buttonR = document.querySelector('.button-arrow.-left')
var elements = document.querySelector('.elements')
var pixels = 0

buttonR.addEventListener('click', function(){
    pixels += 300
    elements.style = `transform: translateX(${pixels}px);`
})
    
buttonL.addEventListener('click', function(){
    pixels -= 300
    elements.style = `transform: translateX(${pixels}px);`
})