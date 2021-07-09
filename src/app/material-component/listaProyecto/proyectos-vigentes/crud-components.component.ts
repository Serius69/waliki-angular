import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../model/proyecto';
import { ProyectoService } from '../../../service/proyecto.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crud-components',
  templateUrl: './proyectos-vigentes-crud.html',
  styleUrls: ['./proyectos-vigentes.component.css']
}
)

export class CrudComponentsComponent implements OnInit {
  public proyectos: Proyecto[] = [];
  public editProyecto: Proyecto | undefined;


  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  public getProyectos(): void {
    this.proyectoService.getProyectos().subscribe(
      (response: Proyecto[]) => {
        this.proyectos = response;
        console.log(this.proyectos);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
