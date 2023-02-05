import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from '../User.interface';
import { UserColumn } from '../userColumns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  panelOpenState: boolean = false;
  data$!: Observable<User[]>;
  @Input() columns!: UserColumn[];
  
  get displayedColumns() {
    return this.columns.map(c => c.name)
  }

  // Здесь, если массив состояния пользователя изменен,
  //  этот компонент повторно отображает и отображает изменения.
  //  Так, например, если добавляется новый пользователь,
  //  этот компонент перерисовывает и показывает нового пользователя.

  constructor(private store: Store) {
    this.data$ = this.store.select((state) => state.users.users);
  }
}
