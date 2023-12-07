import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreInformationsComponent } from './more-informations/more-informations.component';

const routes: Routes = [
  {
    path:'',component:MoreInformationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreInformationsRoutingModule { }
