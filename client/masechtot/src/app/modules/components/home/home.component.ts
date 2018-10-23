import { Component, OnInit } from '@angular/core';
import { MasechtotService } from 'src/app/services/masechtot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projs:any;

  constructor(private masechtotService:MasechtotService) { }

  ngOnInit() {
    this.masechtotService.getProjectsByUserId().subscribe(projects=>this.projs=projects);
  }

}
