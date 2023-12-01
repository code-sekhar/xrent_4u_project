import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('../app/accept/accept/accept.module').then(m=>m.AcceptModule)
  },
  {
    path:'section',loadChildren:()=>import('../app/section/section/section.module').then(m=>m.SectionModule)
  },
  {
    path:'home',loadChildren:()=>import('../app/pages/home/home.module').then(m=>m.HomeModule)
  },{
    path:'perfil',loadChildren:()=>import('../app/pages/perfil/perfil.module').then(m=>m.PerfilModule)
  },{
    path:'home/perfil',loadChildren:()=>import('../app/pages/perfil/perfil.module').then(m=>m.PerfilModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
