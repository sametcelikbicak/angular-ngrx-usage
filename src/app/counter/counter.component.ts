import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/actions/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }

  public reset(): void {
    this.store.dispatch(reset());
  }
}
