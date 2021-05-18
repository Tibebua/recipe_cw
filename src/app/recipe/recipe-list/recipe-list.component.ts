import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from './../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeItem = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('first recipe', 'first is enjera', 'https://www.researchgate.net/profile/Tadesse-Teferra/publication/279329687/figure/fig5/AS:669982325235725@1536747642549/7-Ethiopian-traditional-a-plate-with-the-different-food-groups.ppm'),
    new Recipe('second recipe', 'second is meat', 'https://www.researchgate.net/profile/Tadesse-Teferra/publication/279329687/figure/fig5/AS:669982325235725@1536747642549/7-Ethiopian-traditional-a-plate-with-the-different-food-groups.ppm')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(recipeItem: Recipe) {
    this.selectedRecipeItem.emit(recipeItem);
  }

}
