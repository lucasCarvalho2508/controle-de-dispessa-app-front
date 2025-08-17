import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DispesaFormComponent } from './dispesa-form/dispesa-form.component';
import { DispesaExtratoComponent } from './dispesa-extrato/dispesa-extrato.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DispesaFormComponent, DispesaExtratoComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-controleDispesa';
}
