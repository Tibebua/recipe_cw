import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingredient[] = [
    new Ingredient('Meat', 3),
    new Ingredient('Onion', 5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(newIngredient: Ingredient) {
    this.ingridients.push(newIngredient);
  }

}
