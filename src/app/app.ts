import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Form } from './pages/form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Form],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador_curriculo');
}
