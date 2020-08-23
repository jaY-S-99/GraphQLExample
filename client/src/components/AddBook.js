import React, { Component } from 'react';
import { graphql } from "react-apollo";
import {flowRight as compose} from 'lodash';
import { getAuthorsQuery,getBooksQuery,addBookMutation } from '../queries';


class AddBook extends Component {

    constructor(props){

        super(props);

        this.state = {
            name: '',
            genre: '',
            authorID: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(event){

        this.setState({
            [event.target.name]: event.target.value 
        });

    }

    onSubmit(event){
        event.preventDefault();
        if(this.state.authorID !== ''){

            // calling the mutation
            this.props.addBookMutation({
                variables:{
                    name:this.state.name,
                    genre: this.state.genre,
                    authorId: this.state.authorID
                },
                refetchQueries: [{query:getBooksQuery}]
            });

            this.setState({
              name: "",
              genre: "",
              authorID: "",
            });
        }else{
            alert("Please select an Author.");
        }
    }

    render() {
        let author_options;
        author_options = this.props.getAuthorsQuery.authors ? this.props.getAuthorsQuery.authors.map(author => (<option key={author.id} value={author.id}>{author.name}</option>)) : '';
        return (
            <div className="container mt-5">
                <h1 className="display-4">Book</h1>
                <hr/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group row my-1">
                        <label className="form-label col-2" htmlFor="name">Name: </label>
                        <div className="col-8">
                            <input onChange={this.onChange} value={this.state.name} id="name" type="text" name="name" className="form-control"/>
                        </div>  
                    </div>
                    <div className="form-group row my-1">
                        <label className="form-label col-2" htmlFor="genre">Genre: </label>
                        <div className="col-8">
                            <input onChange={this.onChange} value={this.state.genre} id="genre" name="genre" type="text" className="form-control"/>
                        </div>  
                    </div>
                    <div className="form-group row my-1">
                        <label className="form-label col-2" htmlFor="name">Author: </label>
                        <div className="col-8">
                            <select className="custom-select" name="authorID" value={this.state.authorID} onChange={this.onChange}>
                                <option value=''>Select Author</option>
                                {author_options}
                            </select>
                        </div>  
                    </div>
                    <button className="btn bg-yellow" type="submit">Add Book</button>
                </form>
            </div>
        )
    }
}

export default compose(
    graphql(addBookMutation , {name: 'addBookMutation'}),
    graphql(getAuthorsQuery, {name: 'getAuthorsQuery'})
)(AddBook);
