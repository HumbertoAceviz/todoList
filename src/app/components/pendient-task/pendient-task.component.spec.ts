import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendientTaskComponent } from './pendient-task.component';

describe('PendientTaskComponent', () => {
  let component: PendientTaskComponent;
  let fixture: ComponentFixture<PendientTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendientTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendientTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
