import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilankaComponent } from './srilanka.component';

describe('SrilankaComponent', () => {
  let component: SrilankaComponent;
  let fixture: ComponentFixture<SrilankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrilankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrilankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
