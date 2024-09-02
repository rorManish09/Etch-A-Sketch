

function getSize(){

    Input = prompt('Enter, a number between(2-100):')

    number = parseInt(Input)

    return number
}

size = getSize()
function makeGird(size){

    const container = document.getElementById('container')
    const square = document.querySelectorAll('div')

    amount = size*size;
    console.log(amount)
    
    for(i=0;i<amount;i++){

        let square = document.createElement('div')

        
        square.classList.add('new')
        container.appendChild(square)


        square.addEventListener('mouseover',color)


    }
}

makeGird(size)

function color(){

    this.style.backgroundColor = 'black';

}