import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingListServiceSubscriber:Subscription;
  @ViewChild('shoppingListForm')slForm: NgForm;
  newIngredient: Ingredient;
  editMode: boolean = false;
  toEditItemIndex: number;
  editedItem: Ingredient;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListServiceSubscriber = this.shoppingListService.getIndexOfItemToEdit().subscribe(
      (index) => {
          this.editMode = true;
          this.toEditItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredientByIndex(this.toEditItemIndex);
          this.slForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
      }
    )
  }

  ngOnDestroy() {
    this.shoppingListServiceSubscriber.unsubscribe();
  }

  //using local reference
  // onAddClick(nameInputRef: HTMLInputElement, amountRef:HTMLInputElement){
  //   this.newIngredient = new Ingredient(nameInputRef.value, +amountRef.value);
  //   this.IndegriendToBeAdded.emit(this.newIngredient);
  // }

  onSubmit(shoppingListForm: NgForm) {
    this.newIngredient = new Ingredient(shoppingListForm.form.value.name, shoppingListForm.form.value.amount)
    if(this.editMode) {
      this.shoppingListService.editIngredient(this.newIngredient, this.toEditItemIndex)
    } else {
      this.shoppingListService.addIngredient(this.newIngredient);
    }
    this.editMode = false;
    shoppingListForm.resetForm();
  }

  clearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.toEditItemIndex);
    this.clearForm();
  }

}
