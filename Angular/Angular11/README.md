># Emitir eventos ?
>
>>## Palavras chaves ??
>>*Output* <br>
>>*EventEmitter<any>*<br>
>>*new EventEmitter*<br>
>> @Output() nome: EventEmitter<any> = new EventEmitter;
>>
>>---
## Fazendo ?
quando se é feito um 
~~~Angular
@Output() nomeCaixa: EventEmitter<any> = new EventEmitter;
~~~
voce basicamente criou uma caixinha que serve para dizer quando ela foi chamada como se foce um sinal veremlho. E para fazer esse sinal voce tem utilizar o botão da caixnha
~~~Angular
    this.nomeCaixa.emit();
~~~
E para decidir o que você quer fazer quando essa luzinha for ligada você vai onde o componente esta sendo chamado
~~~Angular
    <app-nome-componente (nomeCaixa)="nomeFuncaoPAI()"></app-nome-componente>
~~~

