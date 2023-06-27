import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTableHeaderComponent } from './ui-table-header.component';

describe('UiTableHeaderComponent', () => {
  let component: UiTableHeaderComponent;
  let fixture: ComponentFixture<UiTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTableHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
