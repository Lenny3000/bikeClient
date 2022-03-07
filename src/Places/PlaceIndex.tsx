import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PlaceCreate from './PlaceCreate';
import PlaceEdit from './PlaceEdit';
import PlaceTable from './PlaceTable';

interface PlaceIndexProps {
    token:string|null
}
 
interface PlaceIndexState {
    
}
 
class PlaceIndex extends React.Component<PlaceIndexProps, PlaceIndexState> {
    constructor(props: PlaceIndexProps) {
        super(props);
        this.state = { placeName:"", address:"", latitude:"", longitude:"", ownerID:"" };
    }
    render() { 
        return ( 
            <>
            <Container>
                <Row>
                    <Col md="3">
                        <PlaceCreate token={this.props.token}/>
                    </Col>
                    <Col md="9">
                        <PlaceTable />
                    </Col>
                    <PlaceEdit />

                </Row>
            </Container>
        <div>

            
        </div> ;
        </>
        )
    }
}
 
export default PlaceIndex;