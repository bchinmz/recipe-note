import { Injectable } from "@angular/core";
import { RecipeNoteService } from "./recipe-note.service";
import { RecipeNoteServiceMock } from "./recipe-note.service.mock";
import { QueueMessage, QueueMessageAction } from "../model/models";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()
export class QueueResolver {
    constructor(
        private recipeNoteService: RecipeNoteServiceMock
    ) {}

    resolve(queueMessage: QueueMessage) {
        switch(queueMessage.action) {
            case QueueMessageAction.DeleteNote:
                return this.recipeNoteService.delete(queueMessage.message);

            default:
                return new ErrorObservable('Unspecified action');
        }
    }
}