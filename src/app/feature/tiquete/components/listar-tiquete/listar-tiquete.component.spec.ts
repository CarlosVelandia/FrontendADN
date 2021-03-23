import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTiqueteComponent } from './listar-tiquete.component';

describe('ListarTiqueteComponent', () => {
  let component: ListarTiqueteComponent;
  let fixture: ComponentFixture<ListarTiqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTiqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
