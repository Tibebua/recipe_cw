import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  indexOfItemToEdit = new Subject<number>();

  private ingridients: Ingredient[] = [
    new Ingredient('Meat', 3),
    new Ingredient('Onion', 5)
  ];

  getIngredients() {
    return this.ingridients.slice();
  }

  getIngredientByIndex(index: number) {
    return this.ingridients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
    this.ingredientChanged.next(this.ingridients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingridients.push(...ingredients);
    this.ingredientChanged.next(this.ingridients.slice());
  }

  passIndexOfItemTobeEdited(index: number) {
    this.indexOfItemToEdit.next(index);
  }

  getIndexOfItemToEdit() {
    return this.indexOfItemToEdit.asObservable();
  }

  editIngredient(ingredient: Ingredient, index: number) {
    this.ingridients[index] = ingredient;
    this.ingredientChanged.next(this.ingridients.slice());
  }

  deleteIngredient(index: number) {
    //delete this.ingridients[index];   //as this lefts the place "undefined"
    this.ingridients.splice(index, 1);
    this.ingredientChanged.next(this.ingridients.slice());
  }

}
