import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { productdata } from "../data";
import { NumberField } from "@base-ui-components/react";
import { useBasket } from "../components/basketcontext";
import picture from "../images/Basicphone.jpeg"

const { Root, Input, Increment, Decrement } = NumberField;

function Store() {
    const { productid } = useParams();
    const product = productdata.find(p => p.id === parseInt(productid));
    const [quantity, setQuantity] = useState(1);
    const { basket, setBasket } = useBasket();


    const quantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const decrementQuantity = () => {
        setQuantity((prev) => Math.max(prev - 1, 1)); 
    };

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const addToCart = () => {
        const existing = basket.find(item => item.id === product.id)

        if(existing) {
            setBasket(basket.map(item => 
                item.id === product.id
                ?{ ...item, quantity: item.quantity + quantity}
                : item
            ));
        }else {
        
        let price = quantity * product.cost
        const newItem = { id: product.id, name: product.name, quantity: quantity, price: price, picture: product.picture };
        setBasket([...basket, newItem]);
        console.log(basket)
        }
    };

    return (
        <div className="store">
            <div className="store-content curve">
                <div className="store-content-image-box">
                    <img className="store-content-image" src={product.picture} />
                </div>
                <div className="store-content-text">
                    <div className="store-content-name">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="store-content-price">
                        <p>£{product.cost}</p>
                    </div>
                    <div className="store-content-number">
                    <Root className="store-content-number">
                        <div className="store-content-number-display">
                        <Input
                        value={quantity}
                        onChange={quantityChange}
                        id={`quantity-${productid}`}
                        min={1}
                        />
                        </div>
                    <div className="store-content-number-change">
                    <Decrement className="decrement" onClick={decrementQuantity}>-</Decrement>
                    <Increment className="increment"onClick={incrementQuantity}>+</Increment>
                    </div>
                    </Root>
                    </div>
                    <button className="addButton"onClick={addToCart} title="Add to Cart">Add to Cart</button>
                </div>
        </div>
        <hr/>
                <div className="store-about curve">
                    <div className="store-about-title">
                        <h2 className="store-about-title">
                            About this Product
                        </h2>
                    </div>
                    <div className="store-about-text">
                        <p>{product.about}</p>
                    </div>
                </div>
            </div>
    );
}

export default Store;
