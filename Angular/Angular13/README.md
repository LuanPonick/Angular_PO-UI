## Interfaces : ? 
Todas as entidades precisa de uma interface para eventuaar possiveis erros.

>## Criação : ?
>Elas sao criadas normalmentes isoladas na pasta app mas podem ser colocadas dentro de uma pasta caso haja necessidade devido a ter muitas interfaces.
>
>### Sintaxe : ??
>~~~Angular
>export interface InterfacName{
>    <name> : <type>;
>    (...)
>}
>~~~
>---
>### EX : !
>~~~
>export interface Animal{
>  name : string;
>  type : string;
>  age : number;
>}
>~~~
>---

## Como usar ?
>Para usar é bem simples basta apenas fazer o import da interface primeiro e logo depois utilizala como um "tipo".
>### sintaxe ??
>~~~Angular
>import { Component } from '@angular/core';
>import { interfaceName } from 'src/app/interfaceName';
>
>@Component({
>    (...)
>})
>export class ListRenderComponent {
>  <varName>:<interfaceName> = [
>    {(...)},
>    ]
>}
>
>~~~
>---
> ### Ex : !
>~~~Angular
>import { Component } from '@angular/core';
>import { Animal } from 'src/app/Animal';
>
>@Component({
> (...)
>})
>export class ListRenderComponent {
>  animals:Animal[] = [
>    {name: "TUCA", type: "dog5",age: 4},
>    {name: "TUCA2", type: "dog4",age: 4},
>    {name: "TUCA3", type: "dog3",age: 4},
>    {name: "TUCA4", type: "dog2",age: 4},
>    {name: "TUCA5", type: "dog1",age: 4}
>    ]
>}
>~~~
>---


