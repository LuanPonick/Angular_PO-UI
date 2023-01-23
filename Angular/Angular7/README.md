>#  Compartilhamento de dados entre componentes ?
>Para realizar essa transição de dados entre componentes necessitase que uma atributo "global"
>>## Criando o atributo "global" ??
>>Esse atributo deve ser criado no app.componets na classe _AppCoponets_
>>> ### <sub>nota : !</sub>
>>> <sub>Esse atributo criado pode ser usada no app.component.html <sub>
>>---
>
>>## Enfiando atributos ao componente ??
>>Caso quera usar isso no componente deve se no _**app.componet**_ quando for chamar o componente instanciar dessa forma o atributo que deseja colocar no componente.
>>~~~angular
>><nome-componente [nomeTemp]="nomeAtributo"><nome-componente>
>>~~~
>>o "nomeTemp" é o nome que o atributo ira entrar no compoente.
>><br>Logo apos ter feito tudo isso agora você ira adicionar no **nome.componente.ts**.
>>~~~angular
>>import { Component, Input } from '@angular/core';
>>//( ... )
>>export class ParentDataComponent {
>>  @Input() nomeTemp:string = '';
>>}
>>~~~
>>---
>
>>## Enfiando objetos ao componente ??
>> Para fazer isso se cria um objeto no _**app.componet**_ e logo depois no nome.component.ts
>>~~~angular
>>  @Input() userDara! : {email :String , role:String};
>>~~~
>>---
>---
