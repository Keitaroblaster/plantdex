import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})

export class PageHomeComponent implements OnInit {
  plantsToDisplay: Plant[] = [];
  categoriesToSend: string[] = [];
  categorieToDisplay: Plant[] = [];
  searchText: string = '';
  sortOfPlants: boolean = true;


  constructor(private plantsService: PlantsService ) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data];
      this.categoriesToSend = this.getCategoriesFromPlants(data);
      this.categorieToDisplay = [...data];
    });
  }

  getCategoriesFromPlants(plants:Plant[]): string[]{
    const catPlantSet = new Set(plants.map(plant => plant.categorie));
    const catPlantArray = Array.from(catPlantSet); // on peut utiliser le spread opérateur [...catPlantSet]
    
    return catPlantArray;
  }

  filterPlantsByCategories(categories:string[]) {
    this.plantsToDisplay = this.categorieToDisplay.filter(
      (a) => categories.includes(a.categorie)
    );

    console.log('dans parent', this.plantsToDisplay);
    
  }

  onSearchTextType(searchtextEntered:string): void{
    this.searchText = searchtextEntered;
    //console.log("sortie", this.searchText);
    
  }

  get selectedPlant():Plant[] {
    return this.plantsToDisplay.filter(
      (plant) =>
    plant.nom.toLowerCase().includes(this.searchText.toLowerCase())  
    );
  }

  onSortAlphaClick(): void {
    this.sortOfPlants = !this.sortOfPlants;
    
    this.plantsToDisplay.sort((a, b) => {
      if (this.sortOfPlants) {
        return b.nom.localeCompare(a.nom);
      } else {
        return a.nom.localeCompare(b.nom);
      }
    });
  
    //console.log('plantes triées', this.plantsToDisplay);
  }
}
