
// se a classe estiver no elemento, o toggle remove e retorna false. Se não existir, ele adiciona e retorna true
let telafinal = document.getElementsByClassName('final_screen')[0]; 
telafinal.classList.add('screenbuy');


let desert = false;
let chiken = false;
let drink = false; 
let foodToBy = []; 
let foodToByP = []; 
let drinkToBy = [];
let drinkToByP = [] ;
let desertToBy = []; 
let desertToByP = [];

function addClass(event){ 
    
    const elementId = event.id;//adiciona classes de acordo com o ID
    
    const food_options = document.querySelectorAll('#food');
    if(elementId==='food'){
        for(let i=0; i <food_options.length; i++){
            let childrent_take = food_options[i];
            if (childrent_take.classList.contains("selected")){
                childrent_take.classList.remove("selected");
                childrent_take.querySelector("#check").classList.toggle("hidden");
                }
            }
        const chikenSelectd = event.classList.toggle("selected");
        event.querySelector("#check").classList.toggle("hidden")
        chiken = chikenSelectd
        
        const foodname =  event.getElementsByClassName('food-title')[0].textContent
        const foodPrice = event.getElementsByClassName('food-price')[0].textContent.replace("R$ ","").replace(",",".")
        
        foodToBy.push(foodname)
        foodToByP.push(foodPrice)

    }
    else if(elementId==='drink'){
        const drinkOptions = document.querySelectorAll('#drink');
        for(let i=0; i <drinkOptions.length; i++){
            let childrent_take = drinkOptions[i];
            if (childrent_take.classList.contains("selected")){
                childrent_take.classList.remove("selected");
                childrent_take.querySelector("#check").classList.toggle("hidden");
                }
            }
        const drinkSelect = event.classList.toggle("selected");
        event.querySelector("#check").classList.toggle("hidden")
        drink = drinkSelect
        const drinkName =  event.getElementsByClassName('food-title')[0].textContent
        const drinkPrice = event.getElementsByClassName('food-price')[0].textContent.replace("R$ ","").replace(",",".")
        drinkToBy.push(drinkName)
        drinkToByP.push(drinkPrice)
        
        
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
        const desertSelectd = event.classList.toggle("selected");
        event.querySelector("#check").classList.toggle("hidden")
        desert = desertSelectd
        const desertName =  event.getElementsByClassName('food-title')[0].textContent
        const desertPrice = event.getElementsByClassName('food-price')[0].textContent.replace("R$ ","").replace(",",".")

        desertToBy.push(desertName)
        desertToByP.push(desertPrice)
        }
        const food = (desert === true && drink === true && chiken === true); //verificando se as 3 comidas estão selecionadas

verify(food);
    
}

function buy(){ //adicionando os textos na tela de cada elemento de acordo com a lista

    telafinal.classList.remove('screenbuy')
    telafinal.classList.add('fix')
    let foodFinalScreen = window.document.getElementById('chikenn')
    let drinksFinalScreen = window.document.getElementById('drinkn')
    let desertFinalScreen = window.document.getElementById('desertn')
    foodFinalScreen.textContent = foodToBy[foodToBy.length - 1]
    drinksFinalScreen.textContent = drinkToBy[drinkToBy.length - 1]
    desertFinalScreen.textContent = desertToBy[desertToBy.length - 1]
    let foodFinalScreenP = window.document.getElementsByClassName('food_priceC')
    let drinksFinalScreenP = window.document.getElementsByClassName('food_priceD')
    let desertFinalScreenP = window.document.getElementsByClassName('food_priceDE')
    
    let foodtotal = foodFinalScreenP[0].textContent = foodToByP[foodToByP.length - 1]
    let drinktotal = drinksFinalScreenP[0].textContent = drinkToByP[drinkToByP.length - 1]
    let deserttotal = desertFinalScreenP[0].textContent = desertToByP[desertToByP.length - 1]
    foodtotal = Number(foodtotal)
    drinktotal = Number(drinktotal)
    deserttotal = Number(deserttotal)
    let total = foodtotal + drinktotal + deserttotal
    
    total = String(total)
    const divTotal = window.document.getElementsByClassName('food_priceTOTAL')[0]
    divTotal.innerHTML = 'R$' + (total.slice(0,5))
    
}
function verify(alimento){
    let botao = window.document.getElementById('finish-order')
    
    if(alimento){
        
        let botao = window.document.getElementById('finish-order')
        botao.classList.remove('disabled')
        botao.classList.add('enabled')
        botao.innerHTML = 'Finalizar pedido'
        botao.addEventListener("click", buy)
        
    }
    else{
        
        botao.classList.add('disabled')
        botao.classList.add('final_content')
        botao.textContent = 'selecione os 3 itens para fechar o pedido'
        
    }
}



// criar uma função que verifica o ID e  dependendo do nome do ID roda outra função que é a do alimento.