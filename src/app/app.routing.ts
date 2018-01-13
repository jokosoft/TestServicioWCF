import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { BuscarComponent } from './buscar/buscar.component';
import { ErrorComponent } from './error/error.component';
import { InsertarComponent } from './insertar/insertar.component';

const appRoutes: Routes = [
	{path: '', component: BuscarComponent},
	{path: 'listado', component: BuscarComponent},
	{path: 'insertar/:dni', component: InsertarComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
