import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmacyHomePage } from './pharmacy-home.page';

describe('PharmacyHomePage', () => {
  let component: PharmacyHomePage;
  let fixture: ComponentFixture<PharmacyHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacyHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
