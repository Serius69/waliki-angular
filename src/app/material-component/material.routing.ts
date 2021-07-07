import { Routes } from '@angular/router';

import { ListaPADComponent } from './listaPAD/listaPAD.component';
import { ListaProyectoComponent } from './listaProyecto/listaProyecto.component';
import { ToolbarComponent } from './registroProyecto/toolbar.component';
import { VistaProyectoComponent } from './vistaProyecto/vistaProyecto.component';

export const MaterialRoutes: Routes = [
  {
    path: 'grid',
    component: ListaPADComponent
  },
  {
    path: 'lists',
    component: ListaProyectoComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: VistaProyectoComponent
  },
];
