import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysicalComponent } from './physical/physical.component';

const routes: Routes = [
  {
    path:'',component:PhysicalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicalRoutingModule { }
