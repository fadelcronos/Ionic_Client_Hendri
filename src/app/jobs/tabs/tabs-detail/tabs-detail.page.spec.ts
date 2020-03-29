import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsDetailPage } from './tabs-detail.page';

describe('TabsDetailPage', () => {
  let component: TabsDetailPage;
  let fixture: ComponentFixture<TabsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
