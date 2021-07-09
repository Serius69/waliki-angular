import { Component, OnInit } from '@angular/core';
import { Activity, activities } from '../../../data-prueba/activity-data';
// import { Donacion, donaciones } from '../../../data-prueba/donacion-data';
import {Proyecto} from '../../../model/proyecto';
import {HttpErrorResponse} from '@angular/common/http';
import { Donacion } from '../../../model/donacion';
import { DonacionService } from '../../../service/donacion.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public donaciones: Donacion[] = [];
  // activityData: Activity[];
  // donacionData: Donacion[];

  constructor(private donacionService: DonacionService) {

    // this.activityData = activities;
    // this.donacionData = donaciones;
  }


  ngOnInit(): void {
  }

  public getDonaciones(): void {
    this.donacionService.donacionPprincipal().subscribe(
      (response: Donacion[]) => {
        this.donaciones = response;
        console.log(this.donaciones);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
