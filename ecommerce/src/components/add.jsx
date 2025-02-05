import React, {useState} from "react";
import Basket from "../pages/basket";

let NextId = 0;

function Add(quantity, product, cost){
    let price = quantity * cost
    const [basket, setBasket] = useState([])
    setBasket([...basket, {id: NextId++, name:product, cost:price}])
    console.log(price)
    console.log(basket)
}

export default Add;