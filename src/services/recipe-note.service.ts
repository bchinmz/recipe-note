import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { RecipeNotes } from "../model/models";


@Injectable()
export class RecipeNoteService {
    constructor(
        protected http:HttpClient,
      ){}
      
     public get() : Observable<RecipeNotes> {
        return this.http.get<RecipeNotes>('https://mkv0jlf8b6.execute-api.ap-southeast-1.amazonaws.com/dev/recipeNotesFunc')
    }
}