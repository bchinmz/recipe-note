import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeNoteService } from '../services/recipe-note.service';
import { NoteComponent } from './note/note.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { RecipeNoteServiceMock } from '../services/recipe-note.service.mock';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionService } from '../services/subscription.service';
import { QueueResolver } from '../services/queue.resolver';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ 
    RecipeNoteService, 
    RecipeNoteServiceMock,
    QueueResolver,
    SubscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
