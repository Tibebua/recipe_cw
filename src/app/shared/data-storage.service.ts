import { RecipeService } from './../recipe/recipe.service';
import { Recipe } from './../recipe/recipe.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {
  recipes: Recipe[];
  baseUrl = 'https://recipe-max-deda9-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    this.recipes = this.recipeService.getRecipes();
    this.http
    .put(this.baseUrl + 'recipes.json', this.recipes)
    .subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  fetchRecipes() {
    return this.http
    .get<Recipe[]>(this.baseUrl+ 'recipes.json')
    // .pipe(
    //   map(recipe => Object.keys(recipe).map(key => recipe[key]))
    // )
    .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe, ingredients: recipe.ingredients? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    )
  }


}
