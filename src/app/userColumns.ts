export const userColumns: UserColumn[] = [
  { name: 'fistname', text: 'Имя пользователя' },
  { name: 'secondName', text: 'Фамилия пользователя' },
  { name: 'email', text: 'Почта' },
  { name: 'addres', text: 'Адрес' },
  { name: 'work', text: 'Место работы' },
];

export interface UserColumn {
  name: string;
  text: string;
}
