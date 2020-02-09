import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { IMethods } from './model';

export const get = (url: string) => {
  return ajax.getJSON(url).pipe(
    catchError((error) => {
      return of(error);
    })
  );
};

export const http = (
  url: string,
  method: keyof IMethods = 'POST',
  headers: any = {},
  body: any = {}
) => {
  return ajax({
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body,
  }).pipe(
    catchError((error) => {
      return of(error);
    })
  );
};
