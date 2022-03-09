import * as React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

interface PlaceEditProps {
    token:string|null
    fetchPlaces: () => void
}
 
interface PlaceEditState {
    placeName:string
    address:string
    latitude:string
    longitude:string
}
 
class PlaceEdit extends React.Component<PlaceEditProps, PlaceEditState> {
    constructor(props: PlaceEditProps) {
        super(props);
        this.state = { 
            placeName: "",
            address:"",
            latitude:"",
            longitude:"" };
    }
    render() { 
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label htmlFor="placeName">placeName</Label>
                        <Input
                        type="text"
                        name="placeName"
                        // onChange={(e) => this.setState({ placeName:e.target.value})}
                        value={this.state.placeName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">address"</Label>
                        <Input
                        type="text"
                        name="address"
                        // onChange={(e) => this.setState({address:e.target.value})}
                        value={this.state.address}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="latitude">longitude</Label>
                        <Input
                        type="number"
                        name="latitude"
                        // onChange={(e) => this.setState({latitude:e.target.value})}
                        value={this.state.latitude}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="longitude">longitude</Label>
                        <Input
                        type="number"
                        name="longitude"
                        // onChange={(e) => this.setState({longitude:e.target.value})}
                        value={this.state.longitude}
                        />
                    </FormGroup>
                </Form> 
            </div>
          );
    }
}
 
export default PlaceEdit;