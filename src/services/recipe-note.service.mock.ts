import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { RecipeNote, RecipeNotes, ApiResponse } from "../model/models";
import 'rxjs/add/observable/of';
import { IRecipeNoteService } from "./recipe-note.service";
import { Subject } from "rxjs/Subject";


@Injectable()
export class RecipeNoteServiceMock implements IRecipeNoteService {
    private recipeNotes: RecipeNotes;

    constructor() { 
        this.recipeNotes = [
            {
                id: 1,
                title: "toast",
                description: "10mins",
            } as RecipeNote,
            {
                id: 2,
                title: "roast",
                description: "45mins",
            } as RecipeNote,
            {
                id: 3,
                title: "steam",
                description: "15mins",
            } as RecipeNote
        ]
    }

    private recipeNoteUpdateSource = new Subject<number>();
    recipeNoteDeleted$ = this.recipeNoteUpdateSource.asObservable();
    recipeNoteUpdated$ = this.recipeNoteUpdateSource.asObservable();

    updateRecipeNote(noteId: number) {
        this.recipeNoteUpdateSource.next(noteId);
    }

    deleteRecipeNote(noteId: number) {
        this.recipeNoteUpdateSource.next(noteId);
    }

    get(): Observable<RecipeNotes> {
        return Observable.of(this.recipeNotes);
    }

    delete(id: number): Observable<ApiResponse> {
        this.recipeNotes = this.recipeNotes.filter(
            (recipeNote) => recipeNote.id !== id
        )
        return Observable.of({});
    }

    update(): Observable<ApiResponse> {
        throw new Error("Method not implemented.");
    }

    create(): Observable<ApiResponse> {
        throw new Error("Method not implemented.");
    }
}