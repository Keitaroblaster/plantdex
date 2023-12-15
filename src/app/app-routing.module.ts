import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent }, //affiche l'URL http://localhost:4200
  { path: 'my-plants', component: PageMyPlantsComponent}, // affiche l'URL http://localhost:4200/my-plants
  { path: 'admin', component: PageAdminComponent}, //affiche l'URL http://localhost:4200/admin
  { path: '**', component: PageNotFoundComponent}, //affiche le message 404 not found si l'url n'est pas bon

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
