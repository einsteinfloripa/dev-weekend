
// se a classe estiver no elemento, o toggle remove e retorna false. Se não exister, ele adiciona e retorna true
let contador = 0
function addClass(event){
    const food_options = document.querySelectorAll('.food-container');
    for(let i=0; i <=2; i++){
        console.log('rodou')
        let childrent_take = food_options[i];
        if (childrent_take.classList.contains("selected")){
            childrent_take.classList.remove("selected");
            childrent_take.querySelector("#check").classList.toggle("hidden");
            }
        }
    event.classList.toggle("selected");
    event.querySelector("#check").classList.toggle("hidden")
    verify()    
    }

function addClassDrink(event){
    event.classList.toggle("selected");
    event.querySelector("#check").classList.toggle("hidden") 
    verify()  
}



