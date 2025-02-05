import React, {useEffect, useState, createContext, useContext} from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    return (
        <BasketContext.Provider value={{ basket, setBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);