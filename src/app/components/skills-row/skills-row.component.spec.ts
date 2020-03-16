import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsRowComponent } from './skills-row.component';

describe('SkillsRowComponent', () => {
  let component: SkillsRowComponent;
  let fixture: ComponentFixture<SkillsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsRowComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
