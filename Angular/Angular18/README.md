## Requisições HTTPS/HTTP ?
>### HTPPCLIENT ??
>Faz a requisição para a API.

>### HTPPHEADERS ??
>Faz a configuração do cabeçalho

>### json-serve ??
>servira para fazer teste com APIS locais/request

>### HTPPCLIENTMODULE ??
>é colocado no app.module para dizer que o angular esta apto para fazer requisiçoes http

># API local
>Para começar, para fazer os devidos teste necessitamos do json-server adicionado ao projeto angular, então apenas de o comando :
>~~~Angular
>npm i json-server
>~~~
>na pasta root do angular/projeto.<br><br>
>E agora nos temos que criar um arquivo json na pasta raiz do angular que servira como "banco de dados" nesse caso ela vai se chamar _**db.json**_<br><br>
>E agora entrando no arquivo package.json adicionar a segunte linha de comando na parte de script :
>
>~~~Angualar
>script{
>   (...)
>   "server": {
>   (...),
>   "json-server --watch db.json"
>   }
>   (...)
>}
>~~~
>E para finalizar logo apos terminar de fazer tudo isso basta apena executar o comando :
>~~~Angular
>npm run server
>~~~
>E com isso nos temos uma API local rodando.
>
>---

># Configurando module.ts
>No module.ts nos precisamos fazer o importe do HttpClientModule.
>~~~Angular
>(...)
>import { HttpClientModule } from '@angular/common/http';
>(...)
>   imports: [
>       (...)
>       HttpClientModule
>   ],
>(...)
>~~~
>---

># Fazendo requisição ??
>O local correto para ser feita essa requisição é no service feito para o componente.<br>
>O primeiro passo é instanciar no contructor do componente que ira receber essa requisção. Seguese uma tabela dizendo o que cada informação simboliza.
>| Nome atributo | O que é |
>| ------------- | ------------- |
>| **_listservice_**  | nome do atributo <br>derivado do listService  |
>| **_ListService_**  | Nome do Service |
>
>~~~Angular
>
>//Aqui esta o script do .ts do COMPONENTE
>export class ListRenderComponent {
>(...)
>  constructor(private listservice : ListService){
>   this.getAnimals();
>   } 
>getAnimals(): void{
>    this.listservice.getAll().subscribe((animals)=>this.animals = animals);
>  }
>(...)
>~~~
>~~~Angular
>//Esse é o arquivo de SERVICE DO componente;
>   (...)
>   import { HttpClient,HttpHeaders } from '@angular/common/http';
>   import { Observable } from 'rxjs';
>
>   export class ListService {
>   private apiUrl = 'http://localhost:3000/animals';
>
>   constructor(private http : HttpClient) { }
>
>       getAll() : Observable<Animal[]>{  
>           return this.http.get<Animal[]>(this.apiUrl);
>       }
    >}
>~~~
>Nesse momento esta sendo feita uma requisição para um banco de dados com um componente refebendo suas devidas informações<br>
>## Pontos a serem resaltados !
>>## Observer ??? 
>>Ele tem uma utilidade de try catch e por conta dele nos temos uma pequena diferença na madeira que o dado é colocado no array por exemplo E impossivel nos falarmos na função getAnimal(), variavel aniamals[] -> getAnimal() , devido ao observer, e para contornar essa questao de deve utilizaro subscrible((<arroyfuction\>)).Para ficar mais claro veja novamente o exemplo acima.
>
>>## Quem faz a adição ao atributo ???
>>Essa pergunta é bem facil de ser respondida que no caso é o getAll() seguindo uma maneira bem diferente assim por dizer
>>~~~Angular
>>   getAll() : Observable<Animal[]>{  
>>       return this.http.get<Animal[]>(this.apiUrl);
>>   }
>>
>>~~~
>>na parte Observable nos temos o nosso "try catch" e logo ao lado nos temos um interface que sera usada para retornar os dados e logo abaixo nos temos um return que diz basicamente que ira retonar a pesquisa ao banco de dadose por fim na parte que diz this.apiUrl é apenas o lugar que esta essa API.