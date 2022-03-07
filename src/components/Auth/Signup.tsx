import * as React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { ISignupRequestObject, ISignupSuccessResponse } from "./Signup.interface";

interface SignupProps {
  setToken:React.Dispatch<React.SetStateAction<string | null>>
}

interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class Signup extends React.Component<SignupProps, SignupState> {
  constructor(props: SignupProps) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "", password: "" };
  }

  handleSubmit=async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url=`http://localhost:4000/user/register`
    const requestObject:ISignupRequestObject={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      password:this.state.password,
      isAdmin:"false"
    }
    const response=await fetch(url,{
      method:"POST",
      body:JSON.stringify(requestObject),
      headers: new Headers({
        'Content-Type': 'application/json'
        })
    })
    const data:ISignupSuccessResponse=await response.json()
    console.log(data);
    this.props.setToken(data.sessionToken)
    localStorage.setItem("token", data.sessionToken)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">firstName</Label>
            <Input
              type="text"
              name="firstName"
              onChange={(e) => this.setState({ firstName: e.target.value })}
              value={this.state.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">lastName</Label>
            <Input
              type="text"
              name="lastName"
              onChange={(e) => this.setState({
              lastName: e.target.value })}
              value={this.state.lastName}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
            <span>email is required</span>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </FormGroup>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;