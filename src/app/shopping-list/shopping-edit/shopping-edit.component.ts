import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputRef', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountRef', {static: false}) amountRef: ElementRef;

  @Output() IndegriendToBeAdded = new EventEmitter<Ingredient>();
  newIngredient: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

  //using local reference
  // onAddClick(nameInputRef: HTMLInputElement, amountRef:HTMLInputElement){
  //   this.newIngredient = new Ingredient(nameInputRef.value, +amountRef.value);
  //   this.IndegriendToBeAdded.emit(this.newIngredient);
  // }

  //using viewchild
  onAddClick() {
    this.newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountRef.nativeElement.value)
    this.IndegriendToBeAdded.emit(this.newIngredient);
  }

}
