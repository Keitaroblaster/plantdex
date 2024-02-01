import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Output() searchText = new EventEmitter<string>();

  onSearch(event:Event): void {
    const searchTextEntered = (event.target as HTMLInputElement).value;
    this.searchText.emit(searchTextEntered);

    //console.log("entrée", searchTextEntered);
  }
  
}
