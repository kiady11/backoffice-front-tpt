import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { DocsComponentsModule } from '../../../components/docs-components.module';
import { UtilisateurRoutingModule } from './utilisateur-routing.modules';
import { UtilisateurComponent } from './utilisateur.component';
import { ChartjsModule } from '@coreui/angular-chartjs';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  FormModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    UtilisateurRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule
  ],
  declarations: [UtilisateurComponent]
})


export class UtilisateurModule {


}
