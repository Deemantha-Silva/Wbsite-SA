import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociologyComponent } from './sociology.component';

describe('SociologyComponent', () => {
  let component: SociologyComponent;
  let fixture: ComponentFixture<SociologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
