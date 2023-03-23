import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2tableComponent } from './ng2table.component';

describe('Ng2tableComponent', () => {
  let component: Ng2tableComponent;
  let fixture: ComponentFixture<Ng2tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ng2tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
