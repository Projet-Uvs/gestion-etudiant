import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  User: Etudiant[];
  private url= "http://localhost/ionic_api/api/etudiants";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Etudiant[]>
  {
    return this.http.get<[Etudiant]>(this.url);
  }

  get(id: string)
  {
    return this.http.get<[Etudiant]>(this.url + '/' + id);
  }

  create(etudiant: Etudiant)
  {
    return this.http.post<[Etudiant]>(this.url, etudiant, {responseType: 'text' as 'json'});
  }

  update(etudiant: Etudiant, id: string)
  {
    return this.http.put<[Etudiant]>(this.url + '/' + id, etudiant);
  }

  delete(id: string)
  {
    return this.http.delete<[Etudiant]>(this.url + '/' + id);
  }
}
