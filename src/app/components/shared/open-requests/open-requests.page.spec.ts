import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenRequestsPage } from './open-requests.page';

describe('OpenRequestsPage', () => {
  let component: OpenRequestsPage;
  let fixture: ComponentFixture<OpenRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
