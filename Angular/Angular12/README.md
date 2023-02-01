## Renderização de lista 
Para se renderizar listas ou vetores completos se usa o _*ngFor_ que ele basicamente cria um componente ou uma tag ate que passe por toda o vetor
### sintaxe : 
~~~Angular
    <tag *ngFor="let varName, of varNames">(...)</tag>
~~~
Sendo q a variavel varName pode ser usada dentro da tag para mostrar o valor q esta no momento 
### EX :
~~~Angular
<ul id="lista">
    <li *ngFor="let animal, of animals">{{animal.name}} {{animal.tipe}}</li>
</ul>
~~~
E a varivel varNames é o vetor que foi criado no arquivo *.TS*





