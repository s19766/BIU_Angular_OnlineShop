import { Buyable } from "./cart.model";

export class Product implements Buyable{
  constructor(
    public id: number,
    public price: number,
    public name: string
  ){}
  idInCart!: string;
}
