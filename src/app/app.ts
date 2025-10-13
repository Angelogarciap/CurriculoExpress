import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Form } from './pages/form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, Form],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador_curriculo');
}
