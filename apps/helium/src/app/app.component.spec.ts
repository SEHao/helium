import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbLayoutModule,
        NbEvaIconsModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
