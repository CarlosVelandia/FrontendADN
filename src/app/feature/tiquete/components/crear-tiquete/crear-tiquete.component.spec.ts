import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTiqueteComponent } from './crear-tiquete.component';

describe('CrearTiqueteComponent', () => {
  let component: CrearTiqueteComponent;
  let fixture: ComponentFixture<CrearTiqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTiqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
