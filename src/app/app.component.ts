import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserColumn, userColumns } from './userColumns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columns$ = new BehaviorSubject<UserColumn[]>([]);

  constructor() {
    this.columns$.next(userColumns);
  }
}
