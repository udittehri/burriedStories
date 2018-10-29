import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyStoryComponent } from './add-my-story.component';

describe('AddMyStoryComponent', () => {
  let component: AddMyStoryComponent;
  let fixture: ComponentFixture<AddMyStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMyStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
