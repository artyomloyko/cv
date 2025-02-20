import { parse } from 'date-fns';

export const parseDate = (string: string) => parse(string, 'MMM yyyy', new Date());
