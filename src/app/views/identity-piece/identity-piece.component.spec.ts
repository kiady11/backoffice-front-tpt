import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityPieceComponent } from './identity-piece.component';

describe('IdentityPieceComponent', () => {
  let component: IdentityPieceComponent;
  let fixture: ComponentFixture<IdentityPieceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityPieceComponent]
    });
    fixture = TestBed.createComponent(IdentityPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
