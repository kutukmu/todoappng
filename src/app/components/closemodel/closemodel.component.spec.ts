import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosemodelComponent } from './closemodel.component';

describe('ClosemodelComponent', () => {
  let component: ClosemodelComponent;
  let fixture: ComponentFixture<ClosemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosemodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
