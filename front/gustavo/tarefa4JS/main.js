
// se a classe estiver no elemento, o toggle remove e retorna false. Se não existir, ele adiciona e retorna true
let telafinal = document.getElementsByClassName('indetificaessamerda')[0]; 
telafinal.classList.add('screenbuy');


let desert = false;
let chiken = false;
let drink = false;
var foodToBy = []
var foodToByP = []
var drinkToBy = []
var desertToBy = []
function addClass(event){
    //let foodContainer = document.querySelector('.food-container');
    console.log('event', event)
    const elementId = event.id;
    console.log('food',elementId)
    const food_options = document.querySelectorAll('#food');
    if(elementId=='food'){
        for(let i=0; i <food_options.length; i++){
            let childrent_take = food_options[i];
            if (childrent_take.classList.contains("selected")){
                childrent_take.classList.remove("selected");
                childrent_take.querySelector("#check").classList.toggle("hidden");
                }
            }
        let teste1 = event.classList.toggle("selected");
        event.querySelector("#check").classList.toggle("hidden")
        chiken = teste1
        
        let foodname =  event.getElementsByClassName('food-title')[0].textContent
        let foodPrice = event.getElementsByClassName('food-price')[0].textContent.replace("R$ ","")
        //console.log('foodname:',foodName)
        foodToBy.push(foodname)
        //foodToBy.push(foodPrice)

    }
    else if(elementId=='drink'){
        const drinkOptions = document.querySelectorAll('#drink');
        for(let i=0; i <drinkOptions.length; i++){
            let childrent_take = drinkOptions[i];
            if (childrent_take.classList.contains("selected")){
                childrent_take.classList.remove("selected");
                childrent_take.querySelector("#check").classList.toggle("hidden");
                }
            }
        let teste2 = event.classList.toggle("selected");
        event.querySelector("#check").classList.toggle("hidden")
        drink = teste2
        let drinkName =  event.getElementsByClassName('food-title')[0].textContent
        let drinkPrice = event.getElementsByClassName('food-price')[0].textContent.replace("R$ ","")
        drinkToBy.push(drinkName)
        drinkToBy.push(drinkPrice)
        
    }
    else{
        const desertOptions = document.querySelectorAll('#dissert');
        for(let i=0; i <desertOptions.length; i++){
            let childrent_take = desertOptions[i];
            if (childrent_take.classList.contains("selected")){
                childrent_take.classList.remove("selected");
                childrent_take.querySelector("#check").classList.toggle("hidden");
                }
            }
        let teste3 = event.classList.toggle("selected");
        event.querySelector("#check").classList.toggle("hidden")
        desert = teste3
        let desertName =  event.getElementsByClassName('food-title')[0].textContent
        let desertPrice = event.getElementsByClassName('food-price')[0].textContent.replace("R$ ","")
        console.log(desertName)
        desertToBy.push(desertName)
        desertToBy.push(desertPrice)
        }
let food = (desert === true && drink === true && chiken === true); //verificando se as 3 comidas estão selecionadas
console.log('testefalfalfasle?', chiken,drink,desert)
verify(food);
    
}

function buy(){ //adicionando os textos na tela de cada elemento de acordo com a lista
    //quanta variavelaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    telafinal.classList.remove('screenbuy')
    telafinal.classList.add('fix')
    let foodFinalScreen = window.document.getElementById('chikenn')
    let drinksFinalScreen = window.document.getElementById('drinkn')
    let desertFinalScreen = window.document.getElementById('desertn')
    foodFinalScreen.textContent = foodToBy[foodToBy.length]
    drinksFinalScreen.textContent = drinkToBy[drinkToBy.length]
    desertFinalScreen.textContent = desertToBy[desertToBy.length]
    let foodFinalScreenP = window.document.getElementsByClassName('food_priceC')
    let drinksFinalScreenP = window.document.getElementsByClassName('food_priceD')
    let desertFinalScreenP = window.document.getElementsByClassName('food_priceDE')
    foodFinalScreenP.textContent = foodToBy[1]
    drinksFinalScreenP.textContent = drinkToBy[1]
    desertFinalScreenP.textContent = desertToBy[1]


}
function verify(alimento){
    let botao = window.document.getElementById('finish-order')
    
    if(alimento){
        console.log('libera ai')
        let botao = window.document.getElementById('finish-order')
        botao.classList.remove('disabled')
        botao.classList.add('enabled')
        botao.innerHTML = 'Finalizar pedido'
        botao.addEventListener("click", buy)
        
    }
    else{
        console.log('ta falso...')
        botao.classList.add('disabled')
        botao.classList.add('final_content')
        botao.textContent = 'selecione os 3 itens para fechar o pedido'
        
    }
}



// criar uma função que verifica o ID e  dependendo do nome do ID roda outra função que é a do alimento.