import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILoveApplesComponent } from './i-love-apples.component';

describe('ILoveApplesComponent', () => {
  let component: ILoveApplesComponent;
  let fixture: ComponentFixture<ILoveApplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ILoveApplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ILoveApplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
