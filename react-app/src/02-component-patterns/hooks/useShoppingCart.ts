import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ counter, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] ?? {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + counter, 0) > 0) {
        productInCart.count += counter;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      //remove product from cart
      const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
      return newShoppingCart;

      //if counter is 0, remove product from shopping cart
      // if (counter === 0) {
      //   const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
      //   return newShoppingCart;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count: counter },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
