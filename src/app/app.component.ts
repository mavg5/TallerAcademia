import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementService } from './element.service';

@Component({
  selector: 'app-root',
  template:  `
  <h1>Lista de Elementos</h1>
  <ul>
    <li *ngFor="let element of elements">
      <strong>{{ element.nombre }}</strong>: {{ element.descripcion }}
    </li>
  </ul>
  <div *ngIf="errorMessage" style="color: red;">
    {{ errorMessage }}
  </div>  `,
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-app';
  elements: any[] = [];
  errorMessage: string = '';

  constructor(private elementService: ElementService){}

  ngOnInit() {
    this.elementService.getElements().subscribe(
      (data) => {
        this.elements = data;  // Asigna datos a la variable
      },
      (error) => {
        this.errorMessage = 'Error al cargar los elementos';  // Muestra un mensaje de error
        console.error('Error al cargar los elementos:', error);
      }
    );
  }
}
