import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent], // apenas importa para usar <app-home>
  template: `<app-home></app-home>`,
  standalone: true
})
export class App {
  protected readonly title = signal('gerador_curriculo');
}
