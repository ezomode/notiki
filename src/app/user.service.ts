import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public bd(): number {
    // return new Date().getTime() - 1000000;
    return 1588060257726 - 1000000;
  }

  constructor() {
  }
}
