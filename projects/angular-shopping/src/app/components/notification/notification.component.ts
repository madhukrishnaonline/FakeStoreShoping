import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Notification, NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  notification: Notification | null = null;
  sub!: Subscription;
  timerSub!: Subscription;

  constructor(private svc: NotificationService) {}

  ngOnInit() {
    this.sub = this.svc.notifications$.subscribe(n => {
      this.notification = n;
      if (n) {
        // auto-dismiss after 4s
        if (this.timerSub) {
          this.timerSub.unsubscribe();
        }
        this.timerSub = timer(4000).subscribe(() => this.dismiss());
      }
    });
  }

  dismiss() {
    this.notification = null;
    this.svc.clear();
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
    if (this.timerSub) this.timerSub.unsubscribe();
  }
}
