import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UiTableCellNumberComponent} from './ui-table-cell-number.component';

describe('UiTableCellNumberComponent', () => {
  let component: UiTableCellNumberComponent;
  let fixture: ComponentFixture<UiTableCellNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTableCellNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTableCellNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
