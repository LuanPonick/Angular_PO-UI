## Rota dinamica ? 
A rota dinamica é basicamente um router que se altera com frequencia e ou tem muitos resultados possiveis, por exemplo caso nos temanhamos uma tabela com pessoas e nos queremos ver apenas 1 pessoa em expecifico e nao todas nos podemos usar a rota dinamica para ajudar nesse ponto.
## Configuração da rota ?
primeiro nos temos que falar ao angular que nos teremos uma rota dinamica e para isso é super simples basta apenas entrar no **app-routing.module** e configurar a rota dessa forma<br><sub> (lembrando que temos que ter um componente em expecifico que ira fazer essa determinada pesquisa e ira organizar para ficar legivel para nos).</sub>
### EX:
~~~Angular
//
//Lembrando que estamos no app-routing.module. 
//
(...)
const routes: Routes = [
    (...)
    {path:'paginaFragmentada/ListReder',component :ListRenderComponent},
    {path:'paginaFragmentada/ListReder/:id',component: ItemDetailsComponent},
    (...)
    ] ;
(...)
~~~
## Como coletar o id da URL ?
Primeiro se deve criar um objeto do tipo **ActiveRouter** para nos usarmos uma junção de funções para pegar o elemento que queremos.
### Em pratica ! 
~~~Angular
constructor(private route ActivatedRoute){
    getId();
}
getId(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
}
~~~
># Converção ?
>O valor quando é pego da url é sempre um texto então pode ser feita uma converção para o tipo em que deseja, no exemplo acima foi feita essa converção para um tipo numeric, por exemplo.
># :id ?
>É um ponto importante ressaltar que o **:id** que foi colocado no app-routing-module tem aver com o nome que sera colocado dentro do _route.snapshot.paramMap.get("id")_
>
>---

## fazendo requisição usando id ?
Para ser feito isso nos temos que no server (criado para o componente) usar essa logica
~~~Angular
getItem(id : number) : Observable<nomeInterface> {
    return this.http.get<NomeInterface>(`${this.apiUrl}/${id}`);
  }
~~~ 
E mesclando os conhecimentos passados **Como coletar o id da URL ?** e **fazendo requisição usando id** ja conseguimes fazer a busca do dado em especifico usando ID