import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanoSimplesComponent } from './card-plano-simples.component';

describe('CardPlanoSimplesComponent', () => {
  let component: CardPlanoSimplesComponent;
  let fixture: ComponentFixture<CardPlanoSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPlanoSimplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPlanoSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
