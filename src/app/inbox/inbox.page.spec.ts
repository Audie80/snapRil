import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MessageComponentModule } from '../message/message.module';

import { InboxPage } from './inbox.page';

describe('InboxPage', () => {
  let component: InboxPage;
  let fixture: ComponentFixture<InboxPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InboxPage],
        imports: [
          IonicModule.forRoot(),
          MessageComponentModule,
          RouterModule.forRoot([]),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(InboxPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
