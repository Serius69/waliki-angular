import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { StickerComponent } from './dashboard-components/aboutUs/sticker.component';
import { ActivityComponent } from './dashboard-components/activity-pagina-principal/activity.component';
import { MenuComponent } from './dashboard-components/proyectos-menu-principal/menu.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    FormsModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [DashboardComponent, StickerComponent, ActivityComponent, MenuComponent]
})
export class DashboardModule {}
