import React from 'react';

import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import AddBook from './components/AddBook';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graph'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container mb-5">
        <div className="row">
          <div className="col-6">
            <h3 className="display-4 mt-5 text-center">Books and Authors</h3>
            <BookList/>
            <hr />
            <AuthorList />
          </div>
          <div className="col-6 left-margin">
            <h1 className="display-4 mt-5 text-center ">Add Stuff</h1>
            <AddBook/>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
