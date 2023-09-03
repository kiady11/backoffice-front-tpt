import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdentityPieceComponent } from './identity-piece.component';

const routes: Routes = [
  {
    path: '',
    component: IdentityPieceComponent,
    data: {
      title: "Gestion pièces d'identité",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityPieceRoutingModule {}

