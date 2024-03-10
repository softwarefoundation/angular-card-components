import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardPlanoCompletoComponent } from './card-plano-completo/card-plano-completo.component';
import { CardPlanoSimplesComponent } from './card-plano-simples/card-plano-simples.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardPlanoCompletoComponent,
    CardPlanoSimplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
