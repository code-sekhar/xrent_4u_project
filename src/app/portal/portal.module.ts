import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal/portal.component';
import { PortalSideBerComponent } from './portal-side-ber/portal-side-ber.component';

@NgModule({
  declarations: [
    PortalComponent,
    PortalSideBerComponent,

  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
