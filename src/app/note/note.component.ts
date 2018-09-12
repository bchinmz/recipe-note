import { Component, OnInit, Input } from '@angular/core';
import { RecipeNote } from '../../model/models';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('content')
  public recipeNote: RecipeNote;

  public editable: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  enableEdit() {
    this.editable = true;
  }

}
