export type RootStackParamList = {
  Home: undefined;
  ProductsList: { pocId: number };
};

export interface Product {
  title: string;
  id: string;
  images: string[];
  productVariants: number[];
}
