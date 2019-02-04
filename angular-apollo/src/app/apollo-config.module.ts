import { NgModule } from "@angular/core";

import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule} from 'apollo-angular-link-http';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class ApolloConfigModule {}
