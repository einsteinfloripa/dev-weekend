import "./styles.css";
import React from "react";
function BuyScreen(props){
    const totalPrice = (Number(props.food?.price || null) + Number(props.drink?.price || null)+ Number(props.desert?.price || null))
    return(
        <div className="buy-container" >
            <div className="buy-container-options">
                <p className="text-food">{props.food?.title}</p>
                <p className="text-food">{props.drink?.title}</p>
                <p className="text-food">{props.desert?.title}</p>
                <p>Total:</p>
            </div>
            <div className="buy-container-price">
                <p className="text-food">{props.food?.price}</p>
                <p className="text-food">{props.drink?.price}</p>
                <p className="text-food">{props.desert?.price}</p>
                <p>{totalPrice.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default BuyScreen
