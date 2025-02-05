import React from "react";
import { useBasket } from "../components/basketcontext";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Slide from '@mui/material/Slide';
import { productdata } from "../data";

function Basket() {
    const [open, setOpen] = React.useState(false); 
    const { basket, setBasket } = useBasket();
    let total = 0;
    let totalbefore = 0
    

    for (let i = 0; i < basket.length; i++) {
        totalbefore += basket[i].price * basket[i].quantity;  
        total = totalbefore.toFixed(2)
    }

    const DeleteItem = (id) => {
        const updatedBasket = basket.filter(item => item.id !== id);
        setBasket(updatedBasket);
    };

    return (
        <>
            {open && (  
                <div className="error">
                <Slide direction="down" in={open} mountOnEnter unmountOnExit>
                    <Alert severity="error" variant="filled" onClose={() => { setOpen(false) }}>
                        <AlertTitle>Warning</AlertTitle>
                        Checkout failed. Please try again later.
                    </Alert>
                </Slide>
                </div>
            )}
            
            <div className="basket curve">
                <div className="basket-list-complete">
                    <ul className="basket-list">
                        {basket.map((item) => (
                            <li className="basket-item" key={item.id}>
                                <div>
                                    <img className="basket-picture" src={item.picture}/>
                                </div>
                                <div>
                                    {item.name}, Number Ordered :{item.quantity}, Price: £{item.price.toFixed(2)}
                                </div> 
                                <div>
                                    <button title="Delete Item" onClick={() => DeleteItem(item.id)}> Delete Item </button>
                                </div>  
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="basket-total">
                    <h3>Your total:</h3> 
                    <h3>£{total}</h3>
                    <div className="basket-button">
                        <Button
                            disabled={open}
                            variant="outlined"
                            onClick={() => { setOpen(true); }}
                        >
                            CheckOut
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Basket;
