## Routers?
Os routers tem uma finalidade de fazer funcionar a navegação do site em si, ou se preferir para fazer as transiçoes entra componentes.
>## Como usar ??
>>1 -
>>Para se usar os routers se deve primariamente no arquivo _app-routing-module.ts_ declarar onde que fica cada página URL.
>>>### Como que funciona esse arquivo e como colocar os caminhos ???
>>>---
>>> esse aruivo e divido basicamente em 4 partes sendo eles os imports,router,ngmodule e AppRoutingModule <br> a parte que mais nos interessa no momento é o routes porque é ali que sera colado o nome no caminho e o componente que ira mostrar caso o usuario entre no caminho especifico<br>
>>>Exemplificação
>>>~~~Angular
>>>import { NgModule } from '@angular/core';
>>>import { RouterModule, Routes } from '@angular/router';
>>>
>>>const routes: Routes = [
>>>{path: '',component: InitComponent}
>>>];
>>>
>>>@NgModule({
>>>  imports: [RouterModule.forRoot(routes)],
>>>  exports: [RouterModule]
>>>})
>>>
>>>export class AppRoutingModule { }
>>>~~~
>>>---
>>
>>2 -E para usar o router basta apenas colocar a tag **<router-outlet\></router-outlet\>**


