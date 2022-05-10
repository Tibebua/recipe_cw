import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {
  RecipeSelected = new Subject<Recipe>();
  RecipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'first recipe',
  //      'first is enjera',
  //       'https://www.researchgate.net/profile/Tadesse-Teferra/publication/279329687/figure/fig5/AS:669982325235725@1536747642549/7-Ethiopian-traditional-a-plate-with-the-different-food-groups.ppm'
  //       ,[new Ingredient('cheese', 12), new Ingredient('onion', 4)]),
  //   new Recipe(
  //     'second recipe',
  //      'second is meat',
  //       'https://www.researchgate.net/profile/Tadesse-Teferra/publication/279329687/figure/fig5/AS:669982325235725@1536747642549/7-Ethiopian-traditional-a-plate-with-the-different-food-groups.ppm',
  //       [new Ingredient("tomato", 8), new Ingredient('butter', 2)])
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.RecipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.RecipesChanged.next(this.recipes.slice());
  }

  editRecipe(recipe: Recipe, id: number) {
    this.recipes[id] = recipe;
    this.RecipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.RecipesChanged.next(this.recipes.slice())
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
