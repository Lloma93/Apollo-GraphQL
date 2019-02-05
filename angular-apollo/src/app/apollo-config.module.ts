import { NgModule } from '@angular/core';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class ApolloConfigModule {

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {

    const uri = 'https://api.graph.cool/simple/v1/cjqsdjik3hg0e0151y3e6uzju';
    const http = httpLink.create({ uri });

    apollo.create({
      link: http,
      cache: new InMemoryCache(),
      connectToDevTools: !environment.production // se não estiver em produção o devTools é habilitado (isso já é apontado sem esse comando)
    });
  }
}
