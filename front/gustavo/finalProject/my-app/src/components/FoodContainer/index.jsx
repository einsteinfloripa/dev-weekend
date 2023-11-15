

//apenas um por linha pode ser selecionado
//um responsável que lida com a seleção(de um e coloca para o outro)
//props.{e oq eu quero}
import "./styles.css";

function FoodContainer(props) {
  
  return(
    <div className={`food-container ${props.isSelected===true? "select":''}`} onClick={props.onClick}>
      <img src={props.image} width={144} height={87} alt="" />
      <div className='food-info'>
        <p className='food-title'>{props.title}</p>
        <p className='food-description'>{props.description}</p>
        <p className='food-price'>{`R$ ${props.price
          .toFixed(2)
          .replace(".", ",")}`}</p>
      </div>
    </div>
  );
}

export default FoodContainer;
