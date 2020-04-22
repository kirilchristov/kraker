import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [   // recipes =  array of Recipe (class) Arrays
    new Recipe('A test recipe', "some test", "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg" ),
    new Recipe('A test recipe', "some test", "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg" )
  ]; 

  constructor() {
    console.log(this.recipes[0].name)
   }


  ngOnInit(): void {
    
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
