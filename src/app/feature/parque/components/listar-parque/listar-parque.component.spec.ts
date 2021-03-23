import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarParqueComponent } from './listar-parque.component';

describe('ListarParqueComponent', () => {
  let component: ListarParqueComponent;
  let fixture: ComponentFixture<ListarParqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarParqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
