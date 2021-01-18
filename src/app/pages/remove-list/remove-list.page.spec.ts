import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemoveListPage } from './remove-list.page';

describe('RemoveListPage', () => {
  let component: RemoveListPage;
  let fixture: ComponentFixture<RemoveListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
