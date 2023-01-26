import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from "./components/diretivas/diretivas.component";
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';

@NgModule({
    declarations: [
        AppComponent,
        FirstComponentComponent,
        ParentDataComponent,
        DiretivasComponent,
        IfRenderComponent,
        EventosComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,

    ]
})
export class AppModule { }
