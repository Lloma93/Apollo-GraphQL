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
  private apiUrl = '';

  constructor(
    private apollo: Apollo
  ) {
    this.allUsers();
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
    this.apollo.query({
      query: gql`
        mutation CreateNewUser($)
      `
    })
  }
}
