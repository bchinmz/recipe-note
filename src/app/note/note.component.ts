import { Component, OnInit, Input } from '@angular/core';
import { RecipeNote } from '../../model/models';
import { RecipeNoteServiceMock } from '../../services/recipe-note.service.mock';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('content')
  public recipeNote: RecipeNote;

  constructor(
    private subscrptionService: SubscriptionService
  ) { }

  ngOnInit() {
  }

  editNote() {
    this.subscrptionService.openEditorForEditNote(this.recipeNote);
  }

  addNote() {
    this.subscrptionService.openEditorForAddNote();
  }

  deleteNote() {
    this.subscrptionService.deleteRecipeNote(this.recipeNote.id);
  }
}
