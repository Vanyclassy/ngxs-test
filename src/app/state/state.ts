import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddUser } from '../action/action';
import { User } from '../User.interface';

export class UserStateModel {
  users!: User[];
}

// State — это классы вместе с декораторами для описания метаданных и отображений действий.

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],
  },
})
export class UserState {
  // Decorator for memoizing a state selector.
  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  // Здесь мы определили действие для сохранения пользовательских данных в хранилище.
  // Когда пользователь пытается создать нового пользователя,
  // мы получаем эти значения полезной нагрузки и добавляем их в массив состояния пользователя.

  @Action(AddUser)
  add(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: AddUser
  ) {
    const state = getState();
    patchState({
      users: [...state.users, payload],
    });
  }
}
