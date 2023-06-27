import {Meta} from '@storybook/angular';
import {UiTableHeaderComponent} from './ui-table-header.component';

export default {
  title: 'UiTableHeaderComponent',
  component: UiTableHeaderComponent,
} as Meta<UiTableHeaderComponent>;

export const Primary = {
  render: (args: UiTableHeaderComponent) => ({
    props: args,
    template: `<angular-dispensing-ui-table-header>
                    Sphere
                </angular-dispensing-ui-table-header>`,
  }),
  args: {},
};
