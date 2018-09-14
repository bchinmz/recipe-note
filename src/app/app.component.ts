import { Component } from '@angular/core';
import { RecipeNoteService } from '../services/recipe-note.service';
import { RecipeNotes } from '../model/models';
import { RecipeNoteServiceMock } from '../services/recipe-note.service.mock';
import { Subscription } from 'rxjs/Subscription';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private recipeNotes: RecipeNotes;
  private error: any;
  private subscription: Subscription;

  constructor(private recipeNotesService: RecipeNoteServiceMock) {
    this.subscription = this.recipeNotesService.recipeNoteDeleted$.pipe(
      switchMap(noteId => {
        return this.recipeNotesService.delete(noteId)
      }),
      switchMap(() => this.recipeNotesService.get())
    ).subscribe(
      response => {
          this.recipeNotes = response
      },
      error => {
        this.error = error
        console.error(error);
      });
  }

  ngOnInit() {
    this.recipeNotesService.get().subscribe(
      response => {
          this.recipeNotes = response
      },
      error => {
        this.error = error
        console.error(error);
      }
    )
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
