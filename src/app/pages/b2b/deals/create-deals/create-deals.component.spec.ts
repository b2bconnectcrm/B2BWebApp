import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDealsComponent } from './create-deals.component';

describe('CreateDealsComponent', () => {
  let component: CreateDealsComponent;
  let fixture: ComponentFixture<CreateDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
