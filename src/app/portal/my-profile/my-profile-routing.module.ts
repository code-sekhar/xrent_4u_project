import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path:'',component:MyProfileComponent,
    children:[
      {
        path:'contact-details',loadChildren:()=>import('../../portal/my-profile/contact-details/contact-details.module').then(m=>m.ContactDetailsModule)
      },

      // { path: '**', redirectTo: '/personal-information' },
      {
        path:'physical',loadChildren:()=>import('../../portal/my-profile/physical/physical.module').then(m=>m.PhysicalModule)
      },
      {
        path:'more-informations',loadChildren:()=>import('../../portal/my-profile/more-informations/more-informations.module').then(m=>m.MoreInformationsModule)
      },
      {
        path:'description',loadChildren:()=>import('../../portal/my-profile/description/description.module').then(m=>m.DescriptionModule)
      },
      { path: 'my-profile', redirectTo: '/contact-details', pathMatch: 'full' },
     // { path: 'change-password', redirectTo: '/change-password', pathMatch: 'full' },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
