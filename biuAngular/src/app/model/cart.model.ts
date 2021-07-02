import { Product } from "./product.model";

export class Cart{
  public static readonly NAME = "CART";

  public static deleteById(id: string){
    const items = this.getAll();
    const index = items.findIndex(x=>x.idInCart === id);
    items.splice(index,1);
    this.saveParsedItems(items);
  }

  public static save(product: Product){
    const items = this.getAll();
    product.idInCart = this.generateCartId(product);
    items.push(product);
    console.log(items);
    this.saveParsedItems(items);
  }

  public static clearCart(){
    this.saveParsedItems([]);
  }

  public static getAll(): Product[]{
    const item = localStorage.getItem(this.NAME);
    if(item){
      return JSON.parse(item);
    }
    return [];
  }

  private static saveParsedItems(products: Product[]){
    localStorage.setItem(this.NAME,JSON.stringify(products));
  }

  private static generateCartId(product: Product): string {
    return product.id +
    Date.now() +
    + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

}

export interface Buyable {
  idInCart: string;
}
