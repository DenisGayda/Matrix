import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDescriptionHeaderComponent } from './level-description-header.component';

describe('LevelDescriptionHeaderComponent', () => {
  let component: LevelDescriptionHeaderComponent;
  let fixture: ComponentFixture<LevelDescriptionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelDescriptionHeaderComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDescriptionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
