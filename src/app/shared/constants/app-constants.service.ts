import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConstantsService {
  public APPLICATION_NAME = 'Escape Plan';
  public USER_NAME = 'Drishya Dinesh';
  public FIRST_NAME = 'Drishya';
  public LAST_NAME = 'Dinesh';
  public PANIC_MESSAGE = 'Need help ? Hang on!!\nWe are just a button away';

  constructor() {}
}
