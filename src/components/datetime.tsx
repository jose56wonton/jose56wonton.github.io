import { format, parse } from 'date-fns';

export const formatDate = (date: string) => {
  return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM yyyy');
};
