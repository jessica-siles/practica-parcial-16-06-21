import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {EmpresasComponent } from './empresas/empresas.component';


export const router: Routes = [

    { path: 'empresas',  component: EmpresasComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);