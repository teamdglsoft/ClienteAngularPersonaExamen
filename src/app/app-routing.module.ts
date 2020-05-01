import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalistComponent } from './components/personalist/personalist.component';
import { PersonaformComponent } from './components/personaform/personaform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/person',
    pathMatch: 'full'
  },
  {
    path: 'person',
    component: PersonalistComponent
  },
  {
    path: 'person/add',
    component: PersonaformComponent
  },
  {
    path: 'person/edit/:id',
    component: PersonaformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
