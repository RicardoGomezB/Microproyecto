import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DataDetalleService } from "../../services/data-detalle.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
