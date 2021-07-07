import { Component, OnInit } from '@angular/core';
import { Activity, activities } from '../../../data-prueba/activity-data';
import { Donacion, donaciones } from '../../../data-prueba/donacion-data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activityData: Activity[];
  donacionData: Donacion[];

  constructor() {

    this.activityData = activities;
    this.donacionData = donaciones;
  }


  ngOnInit(): void {
  }

}
