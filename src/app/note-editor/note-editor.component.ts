import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipeNoteService } from '../../services/recipe-note.service';
import { SubscriptionService } from '../../services/subscription.service';
import { RecipeNote } from '../../model/models';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  public form: FormGroup;

  @Input('note')
  public noteToEdit: RecipeNote;

  constructor(
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required]
      }
    )

    this.setValue();
  }

  private setValue() {
    console.log('is editable', this.editMode());
    if(this.editMode()) {
      this.form.setValue({
        title: this.noteToEdit.title,
        description: this.noteToEdit.description
      });
    }
  }

  addMode() {
    return this.noteToEdit === null;
  }

  editMode() {
    return this.noteToEdit;
  }

  cancel() {
    this.subscriptionService.closeEditor();
  }

  submit() {
    console.log('submitted!');
    this.subscriptionService.closeEditor();
  }
}
