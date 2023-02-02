># two way data bingdind ?
>># Utilidade ??
>>Serve para criar uma varivel que altera seu valor de uma forma muito mais rapida q pode ser usada para o usuario ver em tempo real algum dado que fica em constante mudança sem a necessidade de criação de funçoes especificas.
>>
>>---
>## Começando ??
>>
>>para começar abrindo o app.component coloque o FormsModule
>>
>>>### Time To Show ???
>>> ~~~Angular
>>> import { FormsModule } from '@angular/forms';
>>> ( ... )
>>>@NgModule({
>>>    declarations: [
>>>            ( ... )
>>>        ]
>>>    ( ... )
>>>    imports :[
>>>     ( ... )
>>>     FormsModule,
>>>     ( ... )
>>>]
>>>~~~
>>> ---
>>## Usando na prática ??
>>Para se utilizar na pratica é bem simples no input você usa _[(ngModel)]="\<varname>"_ e com isso vc usa a /<varname> no html onde vc desejar que ela apareça, o varname **Tem** que esta **criado** no .ts .
>>>### EX : !
>>>~~~Angualar
>>><form>
>>>    <input type="text" [(ngModel)]="name" name="name" placeholder="Digite seu nome">
>>>    <input type="submit" value="Eviar">
>>>  </form>
>>>  <p>seu nome é {{name}}</p>
>>>~~~
>>>---
>---
