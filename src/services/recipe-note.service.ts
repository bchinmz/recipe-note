import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { RecipeNote, RecipeNotes } from "../model/models";
import 'rxjs/add/observable/of';


@Injectable()
export class RecipeNoteService {
    constructor(
        protected http:HttpClient,
      ){}
      
     public get() : Observable<RecipeNotes> {
        //return this.http.get<RecipeNotes>('https://mkv0jlf8b6.execute-api.ap-southeast-1.amazonaws.com/dev/recipeNotesFunc')
        return Observable.of([
            {
                title: "toast",
                description: "10mins",
            } as RecipeNote,
            {
                title: "roast",
                description: "45mins",
            } as RecipeNote,
            {
                title: "steam",
                description: "15mins",
            } as RecipeNote
        ]);
    }
}