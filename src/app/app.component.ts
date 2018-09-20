import { Component } from '@angular/core';
import { RecipeNoteService } from '../services/recipe-note.service';
import { RecipeNotes, QueueMessageAction, QueueMessage } from '../model/models';
import { RecipeNoteServiceMock } from '../services/recipe-note.service.mock';
import { Subscription } from 'rxjs/Subscription';
import { switchMap } from 'rxjs/operators/switchMap';
import { tap } from 'rxjs/operators/tap';
import { SubscriptionService } from '../services/subscription.service';
import { QueueResolver } from '../services/queue.resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private recipeNotes: RecipeNotes;
  private error: any;
  private dataSubscription: Subscription;
  private uiSubscription: Subscription;

  public showEditor: boolean = false;
  public recipeNoteToEdit: RecipeNotes;

  constructor(
    private queueResolver: QueueResolver,
    private recipeNotesService: RecipeNoteServiceMock,
    private subscriptionService: SubscriptionService
  ) {
    this.subscribeDataChange();
    this.subscribeUiChange();
  }

  private subscribeUiChange() {
    this.uiSubscription = this.subscriptionService.interaction$.pipe(
      tap(queueMessage => this.processInteraction(queueMessage))
    ).subscribe();
  }

  private processInteraction(message: QueueMessage) {
    switch (message.action) {
      case QueueMessageAction.UiEditorForAddNote:
        this.showEditor = true;
        this.recipeNoteToEdit = null;
        break;
      case QueueMessageAction.UiEditorForEditNote:
        this.showEditor = true;
        this.recipeNoteToEdit = message.message;
        break;
      case QueueMessageAction.UiEditorClose:
        this.showEditor = false;
        break;
    }
  }

  private subscribeDataChange() {
    this.dataSubscription = this.subscriptionService.recipeNoteUpdated$.pipe(
      switchMap(queueMessage => {
        return this.queueResolver.resolve(queueMessage);
      }),
      switchMap(() => this.recipeNotesService.get())
    ).subscribe(response => {
      this.recipeNotes = response;
    }, error => {
      this.error = error;
      console.error(error);
    });
  }

  ngOnInit() {
    this.recipeNotesService.get().subscribe(
      response => {
        this.recipeNotes = response
      },
      error => {
        this.error = error
        console.error(error);
      }
    )
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.dataSubscription.unsubscribe();
    this.uiSubscription.unsubscribe();
  }
}
