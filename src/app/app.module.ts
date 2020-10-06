import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/items/item/item.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './components/items/details/details.component';
import { ItemFormComponent } from './components/items/item-form/item-form.component';
import { ItemBoxComponent } from './components/items/item-box/item-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ItemsComponent,
    DetailsComponent,
    ItemFormComponent,
    ItemBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //AQUIII ESTABA EL DETALLE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
