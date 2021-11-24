import React, { Component } from "react";

class Contact extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome to Contact. '
        }
    }
    changeMessage(){
        this.setState({
            message: 'Contact Details',
            email: 'Email: management@gmail.com',
            phone: 'Mobile No: +8801629551141',
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h2>{this.state.email}</h2>
                <h2>{this.state.phone}</h2>
                <button onClick={()=>this.changeMessage()}>Contact Details</button>
            </div>
        )
    }

}

export default Contact;