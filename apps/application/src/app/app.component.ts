import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'angular-dispensing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
