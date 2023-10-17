
// se a classe estiver no elemento, o toggle remove e retorna false. Se não existir, ele adiciona e retorna true
let desert = false;
let chiken = false;
let drink = false;

function addClass(event){
    const elementId = event.id;
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
        
    }
    else if(elementId=='drink'){
        let teste2 = event.classList.toggle("selected");
        event.querySelector("#check").classList.toggle("hidden")
        drink = teste2 //pq quando eu coloco let aqui, essa porra nao funciona?
        
    }
    else{
        let teste3 = event.classList.toggle("selected");
        event.querySelector("#check").classList.toggle("hidden")
        desert = teste3
        
    }
    let food = (desert === true && drink === true && chiken === true);
    console.log(desert,chiken,food)
    verify(food);
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