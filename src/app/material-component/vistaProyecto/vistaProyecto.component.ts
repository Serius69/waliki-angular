import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-snipper',
  templateUrl: './vistaProyecto.component.html',
  styleUrls: ['./vistaProyecto.component.scss']
})
export class VistaProyectoComponent {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  messages = [
    {
      from: 'Proyecto',
      image: 'assets/images/users/1.jpg',
      subject: 'Material angular',
      content: 'This is the material angular template',
      montoRequerido: '10000',
      montoRecaudado: '10000'
    }

  ];
  actualizacion = [
    {
      titulo: 'Proyecto',
      imagen: 'assets/images/users/1.jpg',
      fecha: 'Material angular',
      descripcion: 'This is the material angular template'
    }

  ];
  rango = [
    {
      from: 'Entre 400 Bs 1000Bs',
      descripcion: 'descripcion ...'
    }

  ];
}
