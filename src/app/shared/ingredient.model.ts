export class Ingredient {
  constructor(public name:string, public amount:number) {}
}

//The following is just shortcut of 

/* 

export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name:string, amount:number) {
    this.name = name;
    this.amount = amount;
  }
} 
*/