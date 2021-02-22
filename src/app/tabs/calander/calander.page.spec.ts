import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalanderPage } from './calander.page';

describe('CalanderPage', () => {
  let component: CalanderPage;
  let fixture: ComponentFixture<CalanderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalanderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
