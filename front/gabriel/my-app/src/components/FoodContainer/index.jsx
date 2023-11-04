/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "./styles.css";

function FoodContainer(props) {
  const [estadoVerde, setEstadoVerde] = useState(false);

  return (
    <div
      className={`food-container ${
        estadoVerde === true ? "selected" : ""
      }`}
      onClick={() => {
        setEstadoVerde(!estadoVerde);
      }}
    >
      <img src={props.image} width={144} height={87} />

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
