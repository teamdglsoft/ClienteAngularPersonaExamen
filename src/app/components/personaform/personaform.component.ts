import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersoncrudService } from '../../services/personcrud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personaform',
  templateUrl: './personaform.component.html',
  styleUrls: ['./personaform.component.css']
})
export class PersonaformComponent implements OnInit {
  persona: any = {
    id: 0,
    nombre: '',
    apellidop: '',
    apellidom: '',
    edad: 0
  };

  edit: boolean = false;

  constructor(
    private personCrudService: PersoncrudService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const parametros = this.activateRoute.snapshot.params;
    if (parametros.id) {
      this.personCrudService.getPersonsById(parametros.id).subscribe(resp => {
        this.persona = resp;
        this.edit = true;
      },
      err => console.log(err));
    }
  }
  saveNewPerson() {
    this.personCrudService.saveNewPerson(this.persona).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/person']);
    },
    err => console.log(err));
  }
  updatePerson() {
    this.personCrudService.updatePerson(this.persona.id, this.persona).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/person']);
    },
    err => console.log(err));
  }

}
