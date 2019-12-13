import { Images } from './../../models/placeholder.model';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  images: Images;
  erro: any;

  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit() {
  }

  getter() {
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log("Variavel recebida: ", this.images);
        console.log("Data recebida: ", data);
    },
      (error: any) => {
        this.erro = error;
        console.error("Erro: ", error);
    });
  }
}
