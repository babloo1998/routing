import React, { Component } from 'react';
import './BooksList.css'
import Books from '../Books/Books.js'

class BooksList extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            books:[{name:"Metro 2033", description:"The novel that gave birth to the video games 'Metro 2033' and 'Metro: Last Light'",author:"Dmitry Glukhovsky",url:"https://images-na.ssl-images-amazon.com/images/I/515pESEh7bL._SX384_BO1,204,203,200_.jpg"},{name:"Itachi Shinden", description:"Tale of Itachi Uchiha",author:"Masashi Kishimito",url:"https://66.media.tumblr.com/3973ead86a0ad8046dce10066f1886a0/tumblr_nubd98o3hM1qeom7yo1_500.png"},{name:"Slenderman", description:"A short collection of Slenderman's stories",author:"HarperCollins Publishers",url:"https://i.harperapps.com/covers/9780062641175/y648.jpg"}]  
        }

    }
    render() {
        const items = this.state.books;
        return (
            <div className="list">
             {items.map((item,i)=> <Books book={item} index={i}/> )}
            </div>
        );
    }
}
export default BooksList;