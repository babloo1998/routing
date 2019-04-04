import React, { Component } from 'react';

class BookDetail extends Component
{
    render() {
        const{name,url,author,description} = this.props.location.state;
        return (
             <section>
                 <h1> {name}</h1>
                 <img src={url}/>
                 <p>{description}</p>
                 <p> By : {author}</p>
             </section>
        );
    }
}
export default BookDetail