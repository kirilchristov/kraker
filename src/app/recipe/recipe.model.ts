export class Recipe {
  public name:string;  //Public - mean that it can be accessed from outside
  public description: string;
  public imagePath: string;

  constructor(name:string, desc:string, imagePath:string) {
    this.name = name,
    this.description = desc,
    this.imagePath = imagePath
  }
}