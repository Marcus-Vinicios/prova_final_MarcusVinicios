import { Component, OnInit } from '@angular/core';
import { Carro } from '../carros';
import { CarroService } from '../carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  selectedCarro?: Carro;

  carros: Carro[]=[];

  constructor(private carroService: CarroService) { }

  getCarros():void {
    this.carroService.getCarros()
        .subscribe(carros => this.carros = carros);
  }

  ngOnInit(): void {
    this.getCarros();
  }
}