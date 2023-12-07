import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { ChangePasswordComponent } from '../change-password/change-password/change-password.component';

const routes: Routes = [
  {
    path:'',component:ProfileInformationComponent
  },
  {
    path:'profile-information',loadChildren:()=>import('../../portal/change-password/change-password.module').then(m=>m.ChangePasswordModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileInformationRoutingModule { }
