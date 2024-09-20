const plusButton = document.querySelector('#plusbutton')
const minusButton = document.querySelector('#minusbutton')
const quantity = document.querySelector('#quantity')

let contador = 0

plusButton.addEventListener('click', function(event){
    contador = contador + 1
    if (contador > 10) {
        contador=10
        return
    }

    quantity.textContent = contador
})

minusButton.addEventListener('click', function(){
contador = contador - 1 
if(contador<0){
    contador=0
    return
}
quantity.textContent=contador
})