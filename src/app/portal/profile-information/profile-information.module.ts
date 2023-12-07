import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileInformationRoutingModule } from './profile-information-routing.module';
import { ProfileInformationComponent } from './profile-information/profile-information.component';


@NgModule({
  declarations: [
    ProfileInformationComponent
  ],
  imports: [
    CommonModule,
    ProfileInformationRoutingModule
  ]
})
export class ProfileInformationModule { }
