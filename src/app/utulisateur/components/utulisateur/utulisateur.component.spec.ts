import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtulisateurComponent } from './utulisateur.component';

describe('UtulisateurComponent', () => {
  let component: UtulisateurComponent;
  let fixture: ComponentFixture<UtulisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtulisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtulisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
