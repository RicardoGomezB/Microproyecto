import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  resInfo;
  data : DataService;

  constructor(service: DataService) { 
    this.data= service;
    this.resInfo = this.data.getResInfo();
  }
  ngOnInit() {
  }

}
