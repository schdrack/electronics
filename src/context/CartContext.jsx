/**
    * @description      : 
    * @author           : Schadrack
    * @group            : 
    * @created          : 28/04/2025 - 16:15:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2025
    * - Author          : Schadrack
    * - Modification    : 
**/
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('marizaTechCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setLoading(false);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('marizaTechCart', JSON.stringify(cartItems));
    }
  }, [cartItems, loading]);

  const addToCart = (product, quantity = 1, selectedVariant = null) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.selectedVariant === selectedVariant
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.selectedVariant === selectedVariant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity,
          selectedVariant
        }
      ];
    });
  };

  const removeFromCart = (productId, variant = null) => {
    setCartItems(prevItems =>
      prevItems.filter(item => 
        !(item.id === productId && item.selectedVariant === variant)
      )
    );
  };

  const updateQuantity = (productId, newQuantity, variant = null) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.selectedVariant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};