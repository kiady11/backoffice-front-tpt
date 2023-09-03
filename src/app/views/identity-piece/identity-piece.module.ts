import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { DocsComponentsModule } from '../../../components/docs-components.module';

import { IdentityPieceComponent } from './identity-piece.component';
import { IdentityPieceRoutingModule } from './identity-piece-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IdentityPieceRoutingModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule,
  ],
  declarations: [IdentityPieceComponent]
})


export class IdentityPieceModule {


}
