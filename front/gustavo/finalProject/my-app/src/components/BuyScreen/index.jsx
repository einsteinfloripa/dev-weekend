import "./styles.css";
import React from "react";
function BuyScreen(props){
    const totalPrice = (Number(props.food?.price || null) + Number(props.drink?.price || null)+ Number(props.desert?.price || null))
    return(
        <div className="buy-container" >
            <div className="buy-container-options">
                <p className="text-food">{props.food?.title}</p>
                <p className="text-food">{props.food?.price}</p>
            </div>
            <div className="buy-container-options">
                <p className="text-food">{props.drink?.title}</p>
                <p className="text-food">{props.drink?.price}</p>
            </div>
            <div className="buy-container-options">
                <p className="text-food">{props.desert?.title}</p>
                <p className="text-food">{props.desert?.price}</p>
            </div>
            <div className="buy-container-options">
                <p>Total:</p>
                <p>{totalPrice.toFixed(2)}</p>
            </div>
            <div className="buy-container-buttom">
                <div className="order">Tudo certo, Hora de perdir</div>
            </div>
            <div className="buy-container-buttom">
                <div className="order orderCancel">Cancelar</div>
            </div>
        </div>
    
    )
}

export default BuyScreen
