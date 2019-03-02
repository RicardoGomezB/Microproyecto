import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DataDetalleService } from "../../services/data-detalle.service";

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {

  recipes;
  resInfo;
  data : DataService;
  name_plato1: String;

  constructor(service: DataService) { 
    this.data= service;
    this.recipes = this.data.getRecipes();
    this.resInfo = this.data.getResInfo();
    this.name_plato1 = DataDetalleService.name_plato
  }

  ngOnInit() {
  }

}
