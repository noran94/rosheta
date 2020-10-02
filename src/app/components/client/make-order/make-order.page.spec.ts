import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeOrderPage } from './make-order.page';

describe('MakeOrderPage', () => {
  let component: MakeOrderPage;
  let fixture: ComponentFixture<MakeOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
