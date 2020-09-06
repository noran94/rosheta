import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccessoriesPage } from './accessories.page';

describe('AccessoriesPage', () => {
  let component: AccessoriesPage;
  let fixture: ComponentFixture<AccessoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
