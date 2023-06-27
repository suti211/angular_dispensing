import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiTableComponent} from './ui-table/ui-table.component';
import {UiTableHeaderComponent} from './ui-table-header/ui-table-header.component';
import {UiTableRowHeaderComponent} from './ui-table-row-header/ui-table-row-header.component';
import {UiTableCellNumberComponent} from './ui-table-cell-number/ui-table-cell-number.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        UiTableComponent,
        UiTableHeaderComponent,
        UiTableRowHeaderComponent,
        UiTableCellNumberComponent,
    ],
  exports: [
    UiTableRowHeaderComponent,
    UiTableHeaderComponent,
    UiTableCellNumberComponent,
    UiTableComponent
  ]
})
export class UiModule {}
