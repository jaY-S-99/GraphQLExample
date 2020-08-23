import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
      author {
        name
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
      age
      books {
        name
      }
    }
  }
`;


const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { getBooksQuery,getAuthorsQuery,addBookMutation }