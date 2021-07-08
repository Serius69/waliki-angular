import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../../../model/proyecto';
import {HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProyectoService } from '../../../service/proyecto.service';

@Component({
  selector: 'app-proyectos-proceso',
  templateUrl: './proyectos-proceso.component.html',
  styleUrls: ['./proyectos-proceso.component.css']
})
export class ProyectosProcesoComponent implements OnInit {
  public proyectosV: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  public proyectosVigentes(): void {
    this.proyectoService.getProyectoVigentes().subscribe(
      (status: Proyecto[]) => {
        this.proyectosV = status;
        console.log(this.proyectosV);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
