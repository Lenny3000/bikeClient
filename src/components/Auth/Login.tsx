import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';
import { ILoginRequestObject, ILoginSuccessResponse } from './Login.interface';

interface LoginProps {
    setToken:React.Dispatch<React.SetStateAction<string | null>>
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

    handleSubmit=async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const url=`${APIURL}/user/login`
        const requestObject:ILoginRequestObject={
            email:this.state.email,
            password:this.state.password,
        }
        const response=await fetch(url,{
            method:"POST",
            body:JSON.stringify(requestObject),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        const data:ILoginSuccessResponse=await response.json()
        console.log(data);
        this.props.setToken(data.sessionToken)
        localStorage.setItem("token", data.sessionToken)
    }
    render() { 
        return ( 
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="email">email</Label>
                        <Input
                        type="email"
                        name="email"
                        placeholder='Enter your email address'
                        onChange={(e) => this.setState({ email: e.target.value})}
                        value={this.state.email}
                        />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                            type="password"
                            name="password"
                            placeholder='Enter you password'
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