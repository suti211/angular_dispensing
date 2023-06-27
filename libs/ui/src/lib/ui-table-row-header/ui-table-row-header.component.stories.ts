import { Meta } from '@storybook/angular';
import { UiTableRowHeaderComponent } from './ui-table-row-header.component';

export default {
  title: 'UiTableRowHeaderComponent',
  component: UiTableRowHeaderComponent,
} as Meta<UiTableRowHeaderComponent>;

export const Primary = {
  render: (args: UiTableRowHeaderComponent) => ({
    props: args,
  }),
  args: {},
};
