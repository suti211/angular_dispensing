import { Meta } from '@storybook/angular';
import { UiTableComponent } from './ui-table.component';

export default {
  title: 'UiTableComponent',
  component: UiTableComponent,
} as Meta<UiTableComponent>;

export const Primary = {
  render: (args: UiTableComponent) => ({
    props: args,
  }),
  args: {
    gridColumns: '',
  },
};
