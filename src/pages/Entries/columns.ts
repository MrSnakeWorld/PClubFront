interface Column {
  id: 'id' | 'date' | 'time' | 'user' | 'idComp';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export const columns: Column[] = [
  { id: 'id', label: '№', minWidth: 170 },
  { id: 'date', label: 'Дата', minWidth: 100 },
  {
    id: 'time',
    label: 'Время',
    minWidth: 170,
  },
  {
    id: 'user',
    label: 'Пользователь',
    minWidth: 170,
  },
  {
    id: 'idComp',
    label: 'Компьютер',
    minWidth: 170,
  },
];