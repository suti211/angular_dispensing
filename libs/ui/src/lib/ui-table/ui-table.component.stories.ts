import {Meta, moduleMetadata} from '@storybook/angular';
import {UiTableComponent} from './ui-table.component';
import {UiTableHeaderComponent} from '../ui-table-header/ui-table-header.component';
import {UiTableRowHeaderComponent} from '../ui-table-row-header/ui-table-row-header.component';
import {UiTableCellNumberComponent} from '../ui-table-cell-number/ui-table-cell-number.component';

export default {
  title: 'UiTableComponent',
  component: UiTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        UiTableHeaderComponent,
        UiTableRowHeaderComponent,
        UiTableCellNumberComponent,
      ],
    }),
  ],
} as Meta<UiTableComponent>;

export const Primary = {
  render: (args: UiTableComponent) => ({
    props: args,
    template: `<angular-dispensing-ui-table gridColumns="1fr 1fr 1fr 1fr">
  <angular-dispensing-ui-table-header></angular-dispensing-ui-table-header>
  <angular-dispensing-ui-table-header>Spherical</angular-dispensing-ui-table-header>
  <angular-dispensing-ui-table-header>Cylindrical</angular-dispensing-ui-table-header>
  <angular-dispensing-ui-table-header>Axial</angular-dispensing-ui-table-header>

  <angular-dispensing-ui-table-row-header>Ordered</angular-dispensing-ui-table-row-header>
  <angular-dispensing-ui-table-cell-number>1.0</angular-dispensing-ui-table-cell-number>
  <angular-dispensing-ui-table-cell-number>3.0</angular-dispensing-ui-table-cell-number>
  <angular-dispensing-ui-table-cell-number>5.0</angular-dispensing-ui-table-cell-number>

  <angular-dispensing-ui-table-row-header>Measured</angular-dispensing-ui-table-row-header>
  <angular-dispensing-ui-table-cell-number>1.0</angular-dispensing-ui-table-cell-number>
  <angular-dispensing-ui-table-cell-number>3.0</angular-dispensing-ui-table-cell-number>
  <angular-dispensing-ui-table-cell-number>5.0</angular-dispensing-ui-table-cell-number>

</angular-dispensing-ui-table>`
  }),
  args: {
    gridColumns: '1f 1fr 1f 1f',
  },
};
