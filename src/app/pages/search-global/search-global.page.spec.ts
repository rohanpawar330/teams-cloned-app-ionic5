import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchGlobalPage } from './search-global.page';

describe('SearchGlobalPage', () => {
  let component: SearchGlobalPage;
  let fixture: ComponentFixture<SearchGlobalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGlobalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchGlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
