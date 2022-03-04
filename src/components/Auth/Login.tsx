import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

interface LoginProps {
    
}
 
interface LoginState {
    email:string;
    password:string;
}
 
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { email:"", password:"" };
    }
    render() { 
        return ( 
            <div>
                <Form>
                    <FormGroup>
                        <Label htmlFor="email">email</Label>
                        <Input
                        type="email"
                        name="email"
                        onChange={(e) => this.setState({ email: e.target.value})}
                        value={this.state.email}
                        />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                            type="password"
                            name="password"
                            onChange={(e) => this.setState({ password:e.target.value})}
                            value={this.state.password}
                            />
                        </FormGroup>
                        <Button type="submit">Login</Button>
                        </Form>
            </div>
         );
    }
}
 
export default Login;