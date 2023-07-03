import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {ArchiveState} from './archive/archive.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([ArchiveState]),
  ],
  providers: [],
  exports: [NgxsModule]
})
export class StateModule {}
