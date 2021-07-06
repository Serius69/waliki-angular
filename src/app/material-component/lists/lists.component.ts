import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
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

}
