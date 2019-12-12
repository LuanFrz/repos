import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.css']
})
export class NgIfNgForComponent implements OnInit {
  arrNumeros = ["Julio", "Moreira", "moreira"];
  constructor() { }

  ngOnInit() {
  }

}
