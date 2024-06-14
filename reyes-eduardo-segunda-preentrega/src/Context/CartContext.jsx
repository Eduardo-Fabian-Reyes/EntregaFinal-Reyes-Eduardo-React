import { createContext, useContext, useState } from "react";

export const CartContext = createContext();



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                    ? {...item, quantity: item.quantity + product.quantity}
                    : item
                );
            } else {
                return [...prevCart, {...product, quantity: product.quantity}];
            }
        });
    };
    
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };
    const clearCart = () => {
        setCart([]);
    };

    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, cartQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};