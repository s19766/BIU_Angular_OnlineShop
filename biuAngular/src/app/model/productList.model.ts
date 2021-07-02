import { Product } from './product.model';

export class ProductList{
  public static readonly PRODUCTS: Product[] = [
    new Product(0, 20, 'Kostka Rubika'),
    new Product(1, 30, 'Garnek'),
    new Product(2, 40, 'Patelnia'),
    new Product(3, 50, 'Opona rowerowa'),
    new Product(4, 60, 'Wódka'),
    new Product(5, 70, 'Piłka do kosza'),
    new Product(6, 80, 'Naszyjnik'),
    new Product(7, 90, 'Klawiatura'),
    new Product(8, 100, 'Mysz'),
    new Product(9, 400, 'Monitor'),
    new Product(10, 50, 'Kabel zasilający'),
    new Product(11, 100, 'Bluza'),
  ]
}
