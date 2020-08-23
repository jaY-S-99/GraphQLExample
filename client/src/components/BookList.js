import React from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries';

class BookList extends React.Component {

    render(){

        let loading = true;
        let bookList = {};

        if(this.props.data.books){
            loading = false;
            bookList = this.props.data.books.map(book => {
                return(
                    <div key={book.id} className="col-md-5 col-sm-12 hover-effect bg-yellow rounded-border py-1 my-1">
                        <h3>{book.name}</h3>
                        <p>Genre: {book.genre}</p>
                        <p>Author: {book.author.name}</p>
                    </div>
                );
            });
        }
        

    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                {loading ? (<h5>Loading</h5>) : bookList}
            </div>
        </div>
    )
    }

}


export default graphql(getBooksQuery)(BookList);
