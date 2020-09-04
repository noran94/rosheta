import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminHomePage } from './admin-home.page';

describe('AdminHomePage', () => {
  let component: AdminHomePage;
  let fixture: ComponentFixture<AdminHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
