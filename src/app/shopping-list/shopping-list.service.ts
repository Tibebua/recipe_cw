import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService {
  ingredientChanged = new BehaviorSubject<Ingredient[]>([]);

  private ingridients: Ingredient[] = [
    new Ingredient('Meat', 3),
    new Ingredient('Onion', 5)
  ];

  getIngredients() {
    return this.ingridients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
    this.ingredientChanged.next(this.ingridients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingridients.push(...ingredients);
    this.ingredientChanged.next(this.ingridients.slice());
  }

}
