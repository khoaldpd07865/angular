import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspComponent } from './detailsp.component';

describe('DetailspComponent', () => {
  let component: DetailspComponent;
  let fixture: ComponentFixture<DetailspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
