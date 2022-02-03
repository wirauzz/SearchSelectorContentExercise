import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SongItemComponent } from './components/song-item/song-item.component';
import { AudiobookItemComponent } from './components/audiobook-item/audiobook-item.component';
import { SongVideoItemComponent } from './components/song-video-item/song-video-item.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SongItemComponent,
    AudiobookItemComponent,
    SongVideoItemComponent,
    CollectionListComponent
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
