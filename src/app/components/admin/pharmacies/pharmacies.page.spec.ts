import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmaciesPage } from './pharmacies.page';

describe('PharmaciesPage', () => {
  let component: PharmaciesPage;
  let fixture: ComponentFixture<PharmaciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmaciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
