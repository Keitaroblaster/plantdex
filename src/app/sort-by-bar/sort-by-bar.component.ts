import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-by-bar',
  templateUrl: './sort-by-bar.component.html',
  styleUrls: ['./sort-by-bar.component.css']
})
export class SortByBarComponent {
@Output() sortAlpha = new EventEmitter<string>();

onCheckedSortAlpha(event: Event): void{
  const ordreAlpha = (event.target as HTMLInputElement).value;
  this.sortAlpha.emit(ordreAlpha);

  //console.log("quand je click",this.sortAlpha);
  

 
  
}

}
