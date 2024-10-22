import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private apiUrl = 'http://localhost/endpoint.php'; //URL del backend

  constructor(private http: HttpClient) { }

  //Método para obtener los elementos
  getElements(): Observable<any> {
    return this.http.get(this.apiUrl); //Solicitud del endpoint
  }
}
