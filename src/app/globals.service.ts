import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  public globalVar: BehaviorSubject<any> = new BehaviorSubject("");
  public isNotLogin: boolean = false;
}
