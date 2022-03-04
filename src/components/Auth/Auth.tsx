import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
interface AuthProps {
    setToken:React.Dispatch<React.SetStateAction<string | null>>
}
 
interface AuthState {
    
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col md="6">
                        <Signup setToken={this.props.setToken}/>
                    </Col>
                    <Col md="6">
                        <Login setToken={this.props.setToken}/>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Auth;