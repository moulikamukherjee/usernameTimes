import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    submit = () => {
        console.log('submitted!');
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="uName" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="pwd" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <Button onClick = {this.submit}>Submit</Button>
            </Form>
        );
    }
}

export default SignUp;