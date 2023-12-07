import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpManComponent } from './sign-up-man/sign-up-man.component';


const routes: Routes = [
  {
    path:'',component:SignUpManComponent,

 children:[
  {
    path:'step1',loadChildren:()=>import('../sign-up-man/step1/step1.module').then(m=>m.Step1Module)
  },
  {
    path:'step2',loadChildren:()=>import('../sign-up-man/step2/step2.module').then(m=>m.Step2Module)
  },
  {
    path:'step3',loadChildren:()=>import('../sign-up-man/step3/step3.module').then(m=>m.Step3Module)
  },
  { path: 'signup', redirectTo: '/step1', pathMatch: 'full' },
  { path: '**', redirectTo: '/step1' },
 ]
  // { path: 'step1', component: SignUpManStep1Component },
  // { path: 'step2', component: SignUpManStep2Component },
  // { path: 'step3', component: SignUpManStep3Component },
  // { path: '', redirectTo: '/step1', pathMatch: 'full' },
  // { path: '**', redirectTo: '/step1' },
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpManRoutingModule { }
