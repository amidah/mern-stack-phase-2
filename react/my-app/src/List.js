import React from 'react';

function BookList({books}){
    return (
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                </li>
            ))}
        </ul>
    );
}

export default function List(){
    const books=[
        {id: 1, title: 'Book1', author: 'Author1'},
        {id: 2, title: 'Book2', author: 'Author2'},
        {id: 3, title: 'Book3', author: 'Author3'},
        {id: 4, title: 'Book4', author: 'Author4'},
        {id: 5, title: 'Book5', author: 'Author5'},
        {id: 6, title: 'Book6', author: 'Author6'}
    ];

    return (
        <div>
            <h2>Books List</h2>
            <BookList books={books}></BookList>
        </div>
    );
}