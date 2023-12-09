import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { ChangePasswordComponent } from './change-password/change-password/change-password.component';

const routes: Routes = [
  {
    path:'',component:PortalComponent,
    children:[
      {
        path:'personal-information',loadChildren:()=>import('../portal/personal-information/personal-information.module').then(m=>m.PersonalInformationModule)
      },
      {
        path:'',loadChildren:()=>import('../portal/personal-information/personal-information.module').then(m=>m.PersonalInformationModule)
      },
      { path: 'portal', redirectTo: '/personal-information', pathMatch: 'full' },
      // { path: '**', redirectTo: '/personal-information' },
      {
        path:'profile-information',loadChildren:()=>import('../portal/profile-information/profile-information.module').then(m=>m.ProfileInformationModule)
      },
      {
        path:'change-password',component:ChangePasswordComponent
      },
      {
        path:'my-profile',loadChildren:()=>import('../portal/my-profile/my-profile.module').then(m=>m.MyProfileModule)
      },
      {
        path:'edit-location',loadChildren:()=>import('../portal/edit-location/edit-location.module').then(m=>m.EditLocationModule)
      },
      {
        path:'upload-photo',loadChildren:()=>import('../portal/upload-photo/upload-photo.module').then(m=>m.UploadPhotoModule)
      },
      {
        path:'my-plan',loadChildren:()=>import('../portal/my-plan/my-plan.module').then(m=>m.MyPlanModule)
      },
      {
        path:'select-plan',loadChildren:()=>import('../portal/select-plan/select-plan.module').then(m=>m.SelectPlanModule)
      }
     // { path: 'change-password', redirectTo: '/change-password', pathMatch: 'full' },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
