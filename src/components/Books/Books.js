import React, { Component } from 'react';
import './Books.css'
import { Link } from "react-router-dom";

class Books extends Component
{
    // handleclick = () =>
    // {
    //     const book= this.props.book;
    //     console.log(" onClick runs");
    //     return <BookDetail name={book.name} url={book.url} author={book.author} description={book.description} />
    // }
    render() {
        const book = this.props.book;
        return (
             <div>
                 
                 <div > <Link to={{pathname:`/bookdetail/${book.name}` , state:book}}> <img src={book.url} /></Link></div>
             </div>
        );
    }
}
export default Books;