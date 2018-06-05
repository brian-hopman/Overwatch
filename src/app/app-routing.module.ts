import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'error', component: ErrorPageComponent },
  { path: 'results/:playerName', component: SearchResultsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
