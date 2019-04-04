import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component
{   

 
    render() {
        console.log(this.props);
             
        return (

             <section>
                 {this.props.toggleAuth()}
                 <h2>this is logout component</h2>
                 <Redirect to="/login"/>
             </section>
        );
    }
    
}   
export default Logout