import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientHomePage } from './client-home.page';

describe('ClientHomePage', () => {
  let component: ClientHomePage;
  let fixture: ComponentFixture<ClientHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
