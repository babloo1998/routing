import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            username:"",
            password:""
        }
    }
    handleChange = event =>
    {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.username + " " + event.target.value );
    };

    
    render() {
        if(this.props.isAuth)
        {
            return <Redirect to="/Books"/>
        }
        return (
            <section>
            <form onSubmit={event=> this.props.handleSubmit(event,this.state)}>
                 <div>
                    <input type="text" name="username" value={this.state.username} className="usertxt" placeholder="Username" onChange={this.handleChange}/>
                 </div>
                 <div>
                    <input type="password" name="password" value={this.state.password} className="passtxt" placeholder="Password" onChange={this.handleChange} />

                 </div>
                 <div>
                    <input type="submit" value="Login" className="loginbtn"/>
                 </div>
                 <p>username is admin</p>
                 <p>password is admin</p>
            </form>
            </section>
        );
    }
}
export default Login;  