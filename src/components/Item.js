import React, {useState} from "react";

function Item({ name, category }) {

const [inCart, notInCart] = useState(false);

function changeCart() {
  notInCart((inCart) => !inCart);
}

const classChange = inCart ? "in-cart" : "";
  return ( 
    <li className={classChange}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeCart} className="add">{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

