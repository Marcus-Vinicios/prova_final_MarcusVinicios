import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Carro } from './carros'; 
import { CARROS } from './mock-carros'; 
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class CarroService {

  constructor(private messageService: MessageService) { }

  getCarros(): Observable<Carro[]> {
    const carros = of(CARROS);
    this.messageService.add('CarroService: fetched carros');
    return carros;
  }

  getCarro(id: number): Observable<Carro> {
    const carro = CARROS.find(h => h.id === id)!;
    this.messageService.add(`CarroService: fetched carro id=${id}`);
    return of(carro);
  }

}



  