import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form } from '../form/form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Form],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  async submitForm() {
    const data = {
      name:
        (document.getElementById('firstName') as HTMLInputElement).value +
        ' ' +
        (document.getElementById('lastName') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      telefone: (document.getElementById('phoneNumber') as HTMLInputElement).value,
      socialMedia: (document.getElementById('socialMedia') as HTMLInputElement).value,
      universityName: (document.getElementById('university') as HTMLInputElement).value,
      courseNameAndCurrentSemester: (document.getElementById('course') as HTMLInputElement).value,
      lastCompanyWorkedAt: (document.getElementById('lastCompanyName') as HTMLInputElement).value,
      lastCompanyWorkedAtPreviousActivities: (
        document.getElementById('workExp') as HTMLInputElement
      ).value,
      extraExperience: (document.getElementById('extraExp') as HTMLInputElement).value,
    };

    const response = await fetch('http://localhost:8080/generateResume/gerar-curriculo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'curriculo.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      alert('Erro ao gerar currículo!');
    }
  }
}
