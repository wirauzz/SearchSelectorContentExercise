import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';
import { OrderCollectionByComponent } from './components/order-collection-by/order-collection-by.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoResultMessageComponent } from './components/no-result-message/no-result-message.component';
@NgModule({
  declarations: [
    AppComponent,
    CollectionListComponent,
    CollectionItemComponent,
    OrderCollectionByComponent,
    NavbarComponent,
    NoResultMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
