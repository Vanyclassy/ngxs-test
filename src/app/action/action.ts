import { User } from '../User.interface';

// Actions 
// могут быть классифицированы как команда, которая должна вызвать что-то, или как результат того, что уже произошло.

export class AddUser {
  static readonly type = '[User] Add';

  constructor(public payload: User) {}
}

export class DeleteUser {
  static readonly type = '[User] Delete';
}
