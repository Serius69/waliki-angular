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



  public onAddEmloyee(addForm: NgForm): void {

    document.getElementById('add-employee-form');
    this.proyectoService.addEmployee(addForm.value).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.getProyectos();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Proyecto[] = [];
    for (const proyectoo of this.proyectos) {
      if (proyectoo.nombreProyecto.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || proyectoo.descripcion.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || proyectoo.montoRecaudar.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      //  || proyectoo.fec.toLowerCase().indexOf(key.toLowerCase()) !== -1)

      {
        results.push(proyectoo);
      }
    }
    this.proyectos = results;
    if (results.length === 0 || !key) {
      this.getProyectos();
    }
  }


}
