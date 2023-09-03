import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule, CardModule, DropdownModule, GridModule } from '@coreui/angular';
import { DocsComponentsModule } from '../../../components/docs-components.module';
import { IncidentsRoutingModule } from './incidents-routing.modules';
import { IncidentsComponent } from './incidents.component';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  FormModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    IncidentsRoutingModule,
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
    WidgetsModule,
    DropdownModule
  ],
  declarations: [IncidentsComponent]
})


export class IncidentsModule {


}
