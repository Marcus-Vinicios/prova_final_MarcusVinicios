import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Carro } from '../carros';
import { CarroService } from '../carros.service';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.css']
})
export class CarroDetailComponent implements OnInit {
 
  carro: Carro | undefined;

  constructor(
    private route: ActivatedRoute,
    private carroService: CarroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCarro();
  }

  getCarro(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carroService.getCarro(id)
      .subscribe(carro => this.carro = carro);
  }

  goBack(): void {
    this.location.back();
  }

}
