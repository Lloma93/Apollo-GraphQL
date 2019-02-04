import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-apollo';
  // private apiUrl = '';

  constructor(
    private apollo: Apollo
  ) {
    this.allUsers();
    this.createUser();
  }

  allUsers(): void {
    this.apollo.query({
      query: gql`
      query {
        allUsers{
          id
          name
          email
        }
      }
    `
    }).subscribe(res => console.log('Query: ', res));
  }

  createUser(): void {
    this.apollo.mutate({
      mutation: gql`
        mutation CreateNewUser($name: String!, $email: String!, $password: String!){
          createUser(name: $name, email: $email, password: $password){
            id
            name
            email
          }
        }
      `,
      variables: {
        name: 'Black Panther',
        email: 'blackpanther@avangers.com',
        password: '123!QAZ2w'
      }
    }).subscribe(res => console.log('Mutation: ', res));
  }
}
