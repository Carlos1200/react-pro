import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ counter, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      //   if counter is 0, remove product from shopping cart
      if (counter === 0) {
        const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
        return newShoppingCart;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count: counter },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
