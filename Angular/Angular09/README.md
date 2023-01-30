## Renderização condicional ?

> # O que é ?
>como o proprio nome sugere a redenderização condicional se base em basicamente uma condição para ver se deve ou nao mostrar algum componente.
>
>---
># ngif ?
>para se fazer isso se precisa usar o ngif.
>~~~Angular
><app-nome-componente *ngIf(<bolean>) > </app-nome-componente>
>~~~
>caso o \<boleano> seje verdadeiro o resultado sera mostrar o que tiver entre o \<app-nome-componente>
># else ? 
>para se fazer uma estrura condicional composta necessita apenas seguir essa sintaxe
>~~~Angular
><h2 *ngIf="<bolean>; else Identificador">nome é luan</h2>
><ng-template #Identificador>
>  nome não é Luan
></ng-template>
>~~~
