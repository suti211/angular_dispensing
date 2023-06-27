import {Meta} from '@storybook/angular';
import {UiTableCellNumberComponent} from './ui-table-cell-number.component';

export default {
  title: 'UiTableCellNumberComponent',
  component: UiTableCellNumberComponent,
} as Meta<UiTableCellNumberComponent>;

export const Primary = {
  render: (args: UiTableCellNumberComponent) => ({
    props: args,
    template: `<angular-dispensing-ui-table-cell-number>1.12</angular-dispensing-ui-table-cell-number>`,
  }),
  args: {},
};
