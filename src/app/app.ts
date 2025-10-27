import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Form } from './pages/form/form';
import { Login } from './pages/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Form, Login],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador_curriculo');
}
