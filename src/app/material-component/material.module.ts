import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';

import { ListaPADComponent } from './listaPAD/listaPAD.component';
import { ListaProyectoComponent } from './listaProyecto/listaProyecto.component';
import { RegistroProyectoComponent } from './registroProyecto/registroProyecto.component';
import { VistaProyectoComponent } from './vistaProyecto/vistaProyecto.component';
import { TableBasicExampleComponent } from './listaPAD/table-basic-example/table-basic-example.component';
import { CrudComponentsComponent } from './listaProyecto/proyectos-vigentes/crud-components.component';
import { ProyectosFinalizadosComponent } from './listaProyecto/proyectos-finalizados/proyectos-finalizados.component';
import { ProyectosProcesoComponent } from './listaProyecto/proyectos-proceso/proyectos-proceso.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    ListaPADComponent,
    ListaProyectoComponent,
    RegistroProyectoComponent,
    VistaProyectoComponent,
    TableBasicExampleComponent,
    CrudComponentsComponent,
    ProyectosFinalizadosComponent,
    ProyectosProcesoComponent,
  ]
})
export class MaterialComponentsModule {}
