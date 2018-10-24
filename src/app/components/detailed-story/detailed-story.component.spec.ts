import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedStoryComponent } from './detailed-story.component';

describe('DetailedStoryComponent', () => {
  let component: DetailedStoryComponent;
  let fixture: ComponentFixture<DetailedStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
