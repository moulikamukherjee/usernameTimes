import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''  
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        if(event.target.name === "username"){
            this.setState({username: event.target.value});
        }
        else if(event.target.name === "password"){
            this.setState({password: event.target.value});
        }
        else if(event.target.name === "email"){
            this.setState({email: event.target.value});
        }
        
    }

    submit(user) {
        console.log('submitted!' +user);
        axios.post('http://localhost:5000/api/users', {
            username: this.state.username,
            password: this.state.password
          })
        
    }

    render() {
        return (
            <Form className="userForm" onSubmit={ this.submit }>
                <FormGroup>
                    <Input type="text" className="uTinput" name="username" id="username" placeholder="Username" value={ this.state.username } onChange={ this.handleChange } required />
                </FormGroup>
                <FormGroup>
                    <Input type="password" className="uTinput" name="password" id="password" placeholder="Password" value={ this.state.password } onChange={ this.handleChange } required/>
                </FormGroup>
                <FormGroup>
                    <Input type="email" className="uTinput" name="email" id="email" placeholder="Email" value={ this.state.email } onChange={ this.handleChange } required/>
                </FormGroup>
                <Button type="submit" value="submit">Submit</Button>
            </Form>
        );
    }
}

export default SignUp;