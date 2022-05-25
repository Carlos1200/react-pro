import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductProps) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(0, counter + value);
    setCounter(newValue);
    onChange && onChange({ counter: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);
  return {
    counter,
    increaseBy,
  };
};
