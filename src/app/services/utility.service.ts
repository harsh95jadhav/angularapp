import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // username = new Subject<any>();
  // insted of subject we can use behavior subject for select Default value
  username = new BehaviorSubject<any>('harsh')
  constructor() { }
}
