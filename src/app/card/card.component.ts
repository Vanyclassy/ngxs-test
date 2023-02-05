import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser, DeleteUser } from '../action/action';
import { User } from '../User.interface';
import { UserColumn } from '../userColumns';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() columns!: UserColumn[];
  formGroup: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private store: Store) {}

  // Чтобы отправить действия, вам нужно внедрить службу Store в ваш компонент/службу
  //  и вызвать функцию отправки с действием или массивом действий,
  // которые вы хотите выполнить.

  addUser(name: User): void {
    this.store.dispatch(new AddUser(name));
  }

  ngOnInit(): void {
    this.columns.forEach((c) =>
      this.formGroup.addControl(
        c.name,
        new FormControl('', Validators.required)
      )
    );
  }

  onClear(c: UserColumn): void {
    this.formGroup.controls[c.name].reset();
  }
}
