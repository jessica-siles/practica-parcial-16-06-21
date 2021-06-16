import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { routes } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, routes],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    EmpresasComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
