import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ErrorComponent } from './error/error.component';

//Servicios
import { PersonasService } from './personas.service';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    InsertarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,
              PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
