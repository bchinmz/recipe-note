import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { RecipeNote, RecipeNotes, ApiResponse } from "../model/models";
import 'rxjs/add/observable/of';

export interface IRecipeNoteService {
    get(): Observable<RecipeNotes>;
    delete(id: number): Observable<ApiResponse>;
    update(): Observable<ApiResponse>;
    create(recipeNote: RecipeNote): Observable<ApiResponse>;
}

@Injectable()
export class RecipeNoteService implements IRecipeNoteService {
    constructor(
        protected http: HttpClient,
    ) { }

    public get(): Observable<RecipeNotes> {
        return this.http.get<RecipeNotes>('https://mkv0jlf8b6.execute-api.ap-southeast-1.amazonaws.com/dev/recipeNotesFunc')
    }

    delete(id: number): Observable<ApiResponse> {
        throw new Error("Method not implemented.");
    }
    update(): Observable<ApiResponse> {
        throw new Error("Method not implemented.");
    }
    create(recipeNote: RecipeNote): Observable<ApiResponse> {
        throw new Error("Method not implemented.");
    }
}