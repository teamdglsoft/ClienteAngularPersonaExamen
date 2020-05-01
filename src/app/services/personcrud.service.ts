import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersoncrudService {
  urlService = 'http://localhost:8181/api/personas';

  constructor(
    private http: HttpClient
  ) { }

  getAllPersons() {
    return this.http.get(this.urlService);
  }

  getPersonsById (id: string) {
    return this.http.get(this.urlService + `/${id}`);
  }

  saveNewPerson(person: Persona) {
    return this.http.post(this.urlService, person);
  }

  deletePerson(id: string) {
    return this.http.delete(this.urlService + `/${id}`);
  }

  updatePerson(id: string, newData: Persona) {
    return this.http.put(this.urlService + `/${id}`, newData);
  }
}
