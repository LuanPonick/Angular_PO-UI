import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { InitComponent } from './components/init/init.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PaginaCompletaComponent } from './components/pagina-completa/pagina-completa.component';
import { PaginaFragmentadaComponent } from './components/pagina-fragmentada/pagina-fragmentada.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path: '',component: InitComponent},
  {path:'paginaCompleta',component :PaginaCompletaComponent},
  {path:'paginaFragmentada',component :PaginaFragmentadaComponent},
    {path:'paginaFragmentada/FirstComponent',component :FirstComponentComponent},
    {path:'paginaFragmentada/ParentData',component :ParentDataComponent},
    {path:'paginaFragmentada/Diretivas',component :DiretivasComponent},
    {path:'paginaFragmentada/IfRender',component :IfRenderComponent},
    {path:'paginaFragmentada/Eventos',component :EventosComponent},
    {path:'paginaFragmentada/Emitter',component :EmitterComponent},
    {path:'paginaFragmentada/ListReder',component :ListRenderComponent},
      {path:'paginaFragmentada/ListReder/:id',component: ItemDetailsComponent},
    {path:'paginaFragmentada/Pipes',component :PipesComponent},
    {path:'paginaFragmentada/TwoWayBinding',component :TwoWayBindingComponent}
    
] ;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
