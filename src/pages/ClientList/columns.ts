interface Column {
  id: 'id' | 'firstname' | 'lastname' | 'pass' | 'email' | 'phone';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export const columns: Column[] = [
  { id: 'id', label: '№', minWidth: 170 },
  { id: 'firstname', label: 'Имя', minWidth: 100 },
  {
    id: 'lastname',
    label: 'Фамилия',
    minWidth: 170,
  },
  {
    id: 'pass',
    label: 'Пароль',
    minWidth: 170,
  },
  {
    id: 'email',
    label: 'Почта',
    minWidth: 170,
  },
  {
    id: 'phone',
    label: 'Телефон',
    minWidth: 170,
  },
];