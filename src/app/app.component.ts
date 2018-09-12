import { Component } from '@angular/core';
import { RecipeNoteService } from '../services/recipe-note.service';
import { RecipeNotes } from '../model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private recipeNotes: RecipeNotes;
  private error: any;

  constructor(private recipeNotesService: RecipeNoteService) {}

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
}
