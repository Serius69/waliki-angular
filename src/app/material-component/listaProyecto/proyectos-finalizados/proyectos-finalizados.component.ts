import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../../../model/proyecto';
import {HttpErrorResponse} from '@angular/common/http';
import {ProyectoService} from '../../../service/proyecto.service';

@Component({
  selector: 'app-proyectos-finalizados',
  templateUrl: './proyectos-finalizados.component.html',
  styleUrls: ['./proyectos-finalizados.component.css']
})
export class ProyectosFinalizadosComponent implements OnInit {
  public proyectosF: Proyecto[] = [];
  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  public proyectosVigentes(): void {
    this.proyectoService.getProyectoVigentes().subscribe(
      (status: Proyecto[]) => {
        this.proyectosF = status;
        console.log(this.proyectosF);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
