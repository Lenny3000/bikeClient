import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
interface AuthProps {
    
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
                        <Signup />
                        {/* work on the component individually.  Reference what i had prior.  */}
                    </Col>
                    <Col md="6">
                        <Login/>
                    </Col>
                </Row>
            </Container>
            // <div>
            //     <p>Hello from Auth</p>
            //     <Login/>
            //     <Signup/>
            // </div>
         );
    }
}
 
export default Auth;