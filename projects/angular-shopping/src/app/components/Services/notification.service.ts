import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type NotificationType = 'success' | 'error' | 'info';
export interface Notification {
  message: string;
  type?: NotificationType;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private subject = new BehaviorSubject<Notification | null>(null);
  public notifications$ = this.subject.asObservable();

  show(message: string, type: NotificationType = 'info') {
    this.subject.next({ message, type });
  }

  showSuccess(message: string) {
    this.show(message, 'success');
  }

  showError(message: string) {
    this.show(message, 'error');
  }

  clear() {
    this.subject.next(null);
  }
}
