import { DataStorageService } from './../shared/data-storage.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() navTabSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) {}

  onSelect(feature: string) {
    this.navTabSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }


}
