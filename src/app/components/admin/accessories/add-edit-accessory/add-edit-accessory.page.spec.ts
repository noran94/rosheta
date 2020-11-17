import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditAccessoryPage } from './add-edit-accessory.page';

describe('AddEditAccessoryPage', () => {
  let component: AddEditAccessoryPage;
  let fixture: ComponentFixture<AddEditAccessoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditAccessoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditAccessoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
