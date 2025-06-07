/**
 * @description      : Shopping cart context for MarizaTech store
 * @author           : Schadrack
 * @created          : 28/04/2025 - 16:15:52
 *
 * MODIFICATION LOG
 * - Version         : 1.1.0
 * - Date            : 07/06/2025
 * - Author          : OpenAI Assistant
 * - Modification    : Enhanced variant handling, validation, and comments
 */

import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('marizaTechCart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
    }
    setLoading(false);
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('marizaTechCart', JSON.stringify(cartItems));
    }
  }, [cartItems, loading]);

  // Add product to cart
  const addToCart = (product, quantity = 1, selectedVariant = null) => {
    setCartItems(prevItems => {
      const variantKey = JSON.stringify(selectedVariant);
      const existingItem = prevItems.find(
        item => item.id === product.id && JSON.stringify(item.selectedVariant) === variantKey
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && JSON.stringify(item.selectedVariant) === variantKey
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

  // Remove a product from cart
  const removeFromCart = (productId, variant = null) => {
    const variantKey = JSON.stringify(variant);
    setCartItems(prevItems =>
      prevItems.filter(
        item => !(item.id === productId && JSON.stringify(item.selectedVariant) === variantKey)
      )
    );
  };

  // Update quantity of a product
  const updateQuantity = (productId, newQuantity, variant = null) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }

    const variantKey = JSON.stringify(variant);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && JSON.stringify(item.selectedVariant) === variantKey
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Total number of items
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
