import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SenseCapService } from './core/services/sense-cap.service';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>

      <nb-layout-header fixed>
      <!-- Insert header here -->
      </nb-layout-header>

      <nb-layout-column>
     <router-outlet></router-outlet> 
      </nb-layout-column>

      <nb-layout-footer fixed>
      <!-- Insert footer here -->
      </nb-layout-footer>

    </nb-layout>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  constructor(private senseCapService: SenseCapService) {}

  ngOnInit(): void {
    const apiKey = '';
    const sn = '';
    this.senseCapService
      .findOne(apiKey, sn)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        console.log(Object.keys(res.data).length)
        console.dir(res);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
