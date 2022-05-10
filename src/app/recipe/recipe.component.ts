import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeSelectedSubscriber: Subscription;
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {

  }


}
