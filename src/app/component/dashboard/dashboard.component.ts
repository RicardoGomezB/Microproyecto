import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { DataDetalleService } from "../../services/data-detalle.service";
import { PlatoDetalleComponent } from "../plato-detalle/plato-detalle.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recipes;
  resInfo;
  data : DataService;
  platoDetalle: PlatoDetalleComponent;

  constructor(service: DataService) {
    this.data= service;
    this.recipes = this.data.getRecipes();
    this.resInfo = this.data.getResInfo();
  }

  onShowDetalle(name_plato: String){
    DataDetalleService.name_plato = name_plato;
  }

  ngOnInit() {
  }

}
