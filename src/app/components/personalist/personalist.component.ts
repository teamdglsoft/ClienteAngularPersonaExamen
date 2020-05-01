import { Component, OnInit } from '@angular/core';
import { PersoncrudService } from '../../services/personcrud.service';

@Component({
  selector: 'app-personalist',
  templateUrl: './personalist.component.html',
  styleUrls: ['./personalist.component.css']
})
export class PersonalistComponent implements OnInit {

  listpersonas: any = [];

  constructor(
    private personCrudService: PersoncrudService
  ) { }

  ngOnInit() {
    this.getAllPersons();
  }
  getAllPersons() {
    this.personCrudService.getAllPersons().subscribe(
      resp => {
        this.listpersonas = resp;
      },
      err => console.log(err)
      );
  }
  deletePerson(id: string) {
    this.personCrudService.deletePerson(id).subscribe(resp => {
      this.getAllPersons();
      console.log(resp);
    },
    err => console.log(err));
  }

}
