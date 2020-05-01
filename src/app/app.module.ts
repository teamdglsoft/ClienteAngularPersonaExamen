import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonaformComponent } from './components/personaform/personaform.component';
import { PersonalistComponent } from './components/personalist/personalist.component';
import { PersoncrudService } from './services/personcrud.service';
import { PersoneditComponent } from './comppnents/personedit/personedit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonaformComponent,
    PersonalistComponent,
    PersoneditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PersoncrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
