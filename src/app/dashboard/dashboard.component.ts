import { Component, OnInit } from '@angular/core';
import { Carro } from '../carros';
import { CarroService } from '../carros.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  carro: Carro[] = [];

  constructor(private carroService: CarroService) { }

  ngOnInit(): void {
    this.getCarros();
  }

  getCarros(): void {
    this.carroService.getCarros()
      .subscribe(carro => this.carro = carro.slice(1, 5));
  }
}