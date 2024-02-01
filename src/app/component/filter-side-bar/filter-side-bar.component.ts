import { Component, EventEmitter, Input, Output } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css']
})
export class FilterSideBarComponent {
  @Input() categoriesToDisplay!: string[]
  @Output() categoriesToFilter = new EventEmitter<string[]>();
  checkedCategories : string [] = [];
  @Output() searchText = new EventEmitter<string>();

  onCheckedCategories(event:Event) {
    const target = event.target as HTMLInputElement;
    
    if(target.checked){

      if(this.checkedCategories.length === this.categoriesToDisplay.length){
        this.checkedCategories = [];
      }
        this.checkedCategories.push(target.value);

    }else{
        this.checkedCategories = this.checkedCategories.filter(
          (categorie) => categorie !== target.value
        );

        if(this.checkedCategories.length === 0) {
          this.checkedCategories = [...this.categoriesToDisplay] 
        }
    }
    
    this.categoriesToFilter.emit(this.checkedCategories)
  }

  onSearch(event:Event): void {
    const searchTextEntered = (event.target as HTMLInputElement).value;
    this.searchText.emit(searchTextEntered);
    console.log("entrée", searchTextEntered);
    
  }
  

}
