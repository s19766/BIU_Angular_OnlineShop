import { Product } from './product.model';

export class ProductList{
  public static readonly PRODUCTS: Product[] = [
    new Product(1, 20, 'Kostka'),
    new Product(2, 30, 'Kostka30'),
    new Product(3, 40, 'Kostka40'),
    new Product(4, 50, 'Kostka50'),
    new Product(5, 60, 'Kostka60'),
    new Product(6, 70, 'Kostka70'),
    new Product(7, 80, 'Kostka80'),
  ]
}
