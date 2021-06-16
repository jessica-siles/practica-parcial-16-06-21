import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { routes } from './app-routing.module';
import { PruebaComponent } from './prueba/prueba.component';
import { EmpresasService } from './servicios/empresas.service';

@NgModule({
  imports: [BrowserModule, FormsModule, routes],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    EmpresasComponent,
    PruebaComponent
  ],
  bootstrap: [AppComponent],
  providers: [EmpresasService]
})
export class AppModule {}
