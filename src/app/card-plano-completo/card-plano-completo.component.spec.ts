import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanoCompletoComponent } from './card-plano-completo.component';

describe('CardPlanoCompletoComponent', () => {
  let component: CardPlanoCompletoComponent;
  let fixture: ComponentFixture<CardPlanoCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPlanoCompletoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPlanoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
