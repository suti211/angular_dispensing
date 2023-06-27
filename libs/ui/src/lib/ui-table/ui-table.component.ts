import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'angular-dispensing-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.css'],
})
export class UiTableComponent {

  @HostBinding('style.grid-template-columns')
  private _gridColumns?: string;

  @Input()
  public set gridColumns(value: string) {
    this._gridColumns = value;
  }
}
