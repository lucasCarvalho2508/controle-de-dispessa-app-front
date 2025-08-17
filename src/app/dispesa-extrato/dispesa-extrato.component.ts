import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Despesa {
  data: string;
  valor: number;
  parcelas: number;
  valorParcela: number;
}

@Component({
  selector: 'app-dispesa-extrato',
  imports: [CommonModule],
  templateUrl: './dispesa-extrato.component.html',
  styleUrl: './dispesa-extrato.component.css'
})
export class DispesaExtratoComponent {

    // Lista de despesas (pode começar vazia ou com dados)
  despesas: Despesa[] = [
    // Exemplo preenchido:
     { data: '2025-08-15', valor: 120, parcelas: 3, valorParcela: 40 }
  ];

}
