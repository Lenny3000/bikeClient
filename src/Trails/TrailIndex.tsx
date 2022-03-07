import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TrailCreate from './TrailCreate';

interface TrailIndexProps {
    token:string|null
}
 
interface TrailIndexState {
    
}
 
class TrailIndex extends React.Component<TrailIndexProps, TrailIndexState> {
    constructor(props: TrailIndexProps) {
        super(props);
        this.state = { trailName:"", length:"", description:"", imageURL:"" };
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col md="3">
                        <TrailCreate token={this.props.token}/>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default TrailIndex;