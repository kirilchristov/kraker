import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [   // recipes =  array of Recipe (class) Arrays
    new Recipe('A test recipe', "some test", "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg" ),
    new Recipe('Another One', "second recipe", "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg" )
  ]; 

  @Output() tellRecipeHasCall = new EventEmitter<{name, description,imagePath}>();

  constructor() {

   }


  ngOnInit(): void {
    
  }

  displayRecipeSelected(input) {
    this.tellRecipeHasCall.emit(input)
  }

}
