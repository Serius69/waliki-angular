import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './listaPAD.component.html',
  styleUrls: ['./listaPAD.component.scss']
})
export class ListaPADComponent {
  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });
  }

  messages = [
    {
      nombrePersona: 'Persona1',
      telefono: '77777',
      cuenta: '86435213',
      direccion: 'Miraflores, Calle 2 N',
      correo: '10000',
      ci: '10000',
      ciudad: '10000',
      imagenProyecto: '',
      imagenPersona: 'assets/images/users/1.jpg'
    }

  ];
  donador = [
    {
      nombrePersona: 'Persona1',
      telefono: '77777',
      cuenta: '86435213',
      direccion: 'Miraflores, Calle 2 N',
      correo: '10000',
      ci: '10000',
      ciudad: '10000',
      imagenProyecto: '',
      imagenPersona: 'assets/images/users/1.jpg'
    }

  ];

  proyecto = [
    {
      nombreProyecto: 'Persona1',
      telefono: '77777',
      cuenta: '86435213',
      direccion: 'Miraflores, Calle 2 N',
      correo: '10000',
      ci: '10000',
      ciudad: '10000',
      imagenProyecto: '',
      imagenPersona: 'assets/images/users/1.jpg'
    }

  ];
  tiles = [
    {
      text: 'One',
      cols: 3,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: 'Two',
      cols: 1,
      rows: 2,
      color: 'lightgreen'
    },
    {
      text: 'Three',
      cols: 1,
      rows: 1,
      color: 'lightpink'
    },
    {
      text: 'Four',
      cols: 2,
      rows: 1,
      color: '#DDBDF1'
    }
  ];
}
