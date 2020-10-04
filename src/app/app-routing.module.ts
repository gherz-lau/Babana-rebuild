import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';


const routes: Routes = [
    
    { path: 'home', component: HomeComponent },
    { path: 'items', component: ItemsComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


