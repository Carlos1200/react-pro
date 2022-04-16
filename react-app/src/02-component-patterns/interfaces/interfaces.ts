import { ReactElement } from "react";

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  increaseBy: (value: number) => void;
  counter: number;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
