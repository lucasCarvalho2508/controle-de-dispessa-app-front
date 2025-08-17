import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-dispesa-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './dispesa-form.component.html',
  styleUrl: './dispesa-form.component.css'
})
export class DispesaFormComponent {

  valor:number = 0;
  numparcela:number = 0;
  parcela:boolean = false;
}
