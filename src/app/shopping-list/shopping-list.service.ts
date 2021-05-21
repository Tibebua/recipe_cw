import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingridients: Ingredient[] = [
    new Ingredient('Meat', 3),
    new Ingredient('Onion', 5)
  ];

  getIngredients() {
    return this.ingridients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
    this.ingredientChanged.emit(this.ingridients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingridients.push(...ingredients);
    this.ingredientChanged.emit(this.ingridients.slice());
  }

}
