import { Component, OnInit, Input } from '@angular/core';
import { RecipeNote } from '../../model/models';
import { RecipeNoteServiceMock } from '../../services/recipe-note.service.mock';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('content')
  public recipeNote: RecipeNote;

  constructor(
    private recipeNoteService: RecipeNoteServiceMock
  ) { }

  ngOnInit() {
  }

  deleteNote() {
    this.recipeNoteService.deleteRecipeNote(this.recipeNote.id);
  }
}
