import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IHopeComponent } from './ihope.component';

describe('IHopeComponent', () => {
  let component: IHopeComponent;
  let fixture: ComponentFixture<IHopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IHopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IHopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
