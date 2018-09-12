import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeNoteService } from '../services/recipe-note.service';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ RecipeNoteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
