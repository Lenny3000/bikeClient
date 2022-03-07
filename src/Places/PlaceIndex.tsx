import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PlaceCreate from './PlaceCreate';
import PlaceEdit from './PlaceEdit';
import PlaceTable from './PlaceTable';
import { IPlaceGetAll } from "./PlaceIndex.interface";

interface PlaceIndexProps {
    token:string|null
}
 
interface PlaceIndexState {
    places: IPlaceGetAll[];
}
 
class PlaceIndex extends React.Component<PlaceIndexProps, PlaceIndexState> {
    constructor(props: PlaceIndexProps) {
        super(props);
        this.state = { places: [] };
    }
    fetchPlaces = () => {
        if (this.props.token === null) {
          alert("No token detected");
          return;
        }
        fetch("http://localhost:4000/place/get", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token,
          }),
        })
          .then((res) => res.json())
          .then((data:IPlaceGetAll[]) => {
            this.setState({places:data})        
            console.log(data);
          });
      };
      componentDidMount() {
        this.fetchPlaces();
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
                        <PlaceTable token={this.props.token} places={this.state.places}/>
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