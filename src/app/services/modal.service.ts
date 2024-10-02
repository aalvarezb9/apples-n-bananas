import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject<'open' | 'close'>('close');

  watch() {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
