import { Component, OnInit, Input } from '@angular/core';

import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor(private recipeService: RecipeService) {
   }

  ngOnInit(): void {
  }

  onToShoppingList() {
    this.recipeService.onAddIngredientsToShoppingList(this.recipeItem.ingredients);
  }

}
