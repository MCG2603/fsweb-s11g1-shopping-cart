import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { MyContextObject } from "../contexts/ProductContext";

const Item = (props) => {
  const { cart, addItem,setCart} = useContext(MyContextObject);

  const removeCart=()=>{
    console.log(props,cart)
    let arr=[];
arr=cart.filter((item)=>(item.id!=props.id

));
setCart(arr)
console.log(props,cart)
  }
   
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={removeCart}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
