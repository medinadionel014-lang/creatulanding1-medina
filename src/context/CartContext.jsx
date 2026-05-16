import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    setCart([
      ...cart,
      {
        ...item,
        quantity
      }
    ]);

  };

  const totalQuantity = () => {

    return cart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

  };

  const clearCart = () => {

    setCart([]);

  };

  return (

    <CartContext.Provider
      value={{
        cart,
        addItem,
        totalQuantity,
        clearCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

};