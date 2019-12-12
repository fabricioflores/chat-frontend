import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedTopicsComponent } from './banned-topics.component';

describe('BannedTopicsComponent', () => {
  let component: BannedTopicsComponent;
  let fixture: ComponentFixture<BannedTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannedTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
