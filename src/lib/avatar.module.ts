import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcBaseModule } from '@ngx-tc/base';

import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    TcBaseModule
  ],
  exports: [
    AvatarComponent,
    TcBaseModule
  ]
})
export class TcAvatarModule { }
