import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBannedCountComponent } from './text-banned-count.component';

describe('TextBannedCountComponent', () => {
  let component: TextBannedCountComponent;
  let fixture: ComponentFixture<TextBannedCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBannedCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBannedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
