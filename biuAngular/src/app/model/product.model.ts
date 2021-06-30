import { NumberValueAccessor } from '@angular/forms';

export class Product{
  constructor(
    public id: number,
    public price: number,
    public name: string
  ){}
}
