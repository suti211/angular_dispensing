import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTableRowHeaderComponent } from './ui-table-row-header.component';

describe('UiTableRowHeaderComponent', () => {
  let component: UiTableRowHeaderComponent;
  let fixture: ComponentFixture<UiTableRowHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTableRowHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTableRowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
