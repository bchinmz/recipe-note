import { Subject } from "rxjs/Subject";
import { RecipeNote, QueueMessage, QueueMessageAction } from "../model/models";
import { Injectable } from "@angular/core";

@Injectable()
export class SubscriptionService {
    private recipeNoteUpdateSource = new Subject<QueueMessage>();
    private interactionSource = new Subject<QueueMessage>();

    recipeNoteUpdated$ = this.recipeNoteUpdateSource.asObservable();
    interaction$ = this.interactionSource.asObservable();

    openEditorForAddNote() {
        this.interactionSource.next(
            new QueueMessage(QueueMessageAction.UiEditorForAddNote, null)
        )
    }

    openEditorForEditNote(recipeNote: RecipeNote) {
        this.interactionSource.next(
            new QueueMessage(QueueMessageAction.UiEditorForEditNote, recipeNote)
        )
    }

    closeEditor() {
        this.interactionSource.next(
            new QueueMessage(QueueMessageAction.UiEditorClose, null)
        )
    }

    addRecipeNote(recipeNote: RecipeNote) {
        this.recipeNoteUpdateSource.next(
            new QueueMessage(QueueMessageAction.AddNote, recipeNote)
        );
    }

    updateRecipeNote(recipeNote: RecipeNote) {
        this.recipeNoteUpdateSource.next(
            new QueueMessage(QueueMessageAction.UpdateNote, recipeNote)
        );
    }

    deleteRecipeNote(noteId: number) {
        this.recipeNoteUpdateSource.next(
            new QueueMessage(QueueMessageAction.DeleteNote, noteId)
        );
    }
}