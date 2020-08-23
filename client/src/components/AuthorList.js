import React from "react";
import { graphql } from 'react-apollo';
import {getAuthorsQuery} from '../queries';


class AuthorList extends React.Component {

  render(){

    let loading = true;
    let authorList = {};

    if(this.props.data.authors){
      loading=false;
      authorList = this.props.data.authors.map((author) => {
        let author_books = "";

        author.books.forEach((book,index) => {
          if(index === 0){
            author_books = book.name;
          }else{
            author_books = author_books + ", " + book.name;
          }
        });

        return (
          <div
            key={author.id}
            className="col-md-5 col-sm-12 hover-effect bg-yellow rounded-border py-1 my-1"
          >
            <h2>{author.name}</h2>
            <p>Age: {author.age}</p>
            <p>Books: {author_books}</p>
          </div>
        );
      });
    }

    return (
      <div className="container">
        <div className="row justify-content-between">
          {loading ? (<h5>Loading...</h5>) : authorList }
        </div>
      </div>
    );

  }
}

export default graphql(getAuthorsQuery)(AuthorList);
