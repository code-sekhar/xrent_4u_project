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
  },
  {
    path:'planos',loadChildren:()=>import('../app/pages/planos/planos.module').then(m=>m.PlanosModule)
  },
  {
    path:'home/perfil/planos',loadChildren:()=>import('../app/pages/planos/planos.module').then(m=>m.PlanosModule)
  },
  {
    path:'home/planos',loadChildren:()=>import('../app/pages/planos/planos.module').then(m=>m.PlanosModule)
  },
  {
    path:'signup',loadChildren:()=>import('../app/sign_up/sign-up-man/sign-up-man.module').then(m=>m.SignUpManModule)
  },
  {
    path:'pagamento',loadChildren:()=>import('../app/pages/pagamento/pagamento.module').then(m=>m.PagamentoModule)
  },
  {
    path:'portal',loadChildren:()=>import('../app/portal/portal.module').then(m=>m.PortalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
