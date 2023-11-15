import React from "react";
import "./styles.css";


const Footer = (props) => {
    
  return (
    <div
      className={`footer-botao ${props.verify ? "ready" : ""}`}
      onClick={props.verify ? props.onClick: undefined}
    >
      <h1>Fazer pedido</h1>
    </div>
  );
};

export default Footer;
