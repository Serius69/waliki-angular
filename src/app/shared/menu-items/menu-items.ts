import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Pagina Principal', type: 'link', icon: 'crop_7_5' },
  { state: 'grid', type: 'link', name: 'Listas P-A-D', icon: 'view_comfy' },
  { state: 'lists', type: 'link', name: 'Proyectos', icon: 'view_list' },
  { state: 'toolbar', type: 'link', name: 'Registrar Proyecto', icon: 'voicemail' },
  { state: 'progress-snipper', type: 'link', name: 'Vista Proyecto', icon: 'border_horizontal' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
