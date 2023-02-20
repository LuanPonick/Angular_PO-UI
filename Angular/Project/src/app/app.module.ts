import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from "./components/diretivas/diretivas.component";
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { InitComponent } from './components/init/init.component';
import { PaginaCompletaComponent } from './components/pagina-completa/pagina-completa.component';
import { PaginaFragmentadaComponent } from './components/pagina-fragmentada/pagina-fragmentada.component';



@NgModule({
    declarations: [
        AppComponent,
        FirstComponentComponent,
        ParentDataComponent,
        DiretivasComponent,
        IfRenderComponent,
        EventosComponent,
        CabecalhoComponent,
        EmitterComponent,
        ChangeNumberComponent,
        ListRenderComponent,
        PipesComponent,
        TwoWayBindingComponent,
        InitComponent,
        PaginaCompletaComponent,
        PaginaFragmentadaComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ]
})
export class AppModule { }
