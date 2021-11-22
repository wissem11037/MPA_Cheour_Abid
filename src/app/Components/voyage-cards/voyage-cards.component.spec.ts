import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageCardsComponent } from './voyage-cards.component';

describe('VoyageCardsComponent', () => {
  let component: VoyageCardsComponent;
  let fixture: ComponentFixture<VoyageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
