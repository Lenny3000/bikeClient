import * as React from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { IEditRequestObject } from './PlaceEdit.interface';

interface PlaceEditProps {
    token:string|null
    fetchPlaces: () => void
    closeModal: () => void
    currentPlaceData: IEditRequestObject
    editPlaceFetch:(place: IEditRequestObject) => void
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
            placeName: this.props.currentPlaceData.placeName,
            address:this.props.currentPlaceData.address,
            latitude:this.props.currentPlaceData.latitude,
            longitude:this.props.currentPlaceData.longitude };
    }
    handleClick=()=>{
        const requestObject:IEditRequestObject={
            id:this.props.currentPlaceData.id,
            placeName:this.state.placeName,
            address:this.state.address,
            latitude:this.state.latitude,
            longitude:this.state.longitude
        }
        this.props.editPlaceFetch(requestObject)
    }
    render() { 
        return (
            <div>
                <Modal isOpen={true} >
                <ModalHeader >Edit a Place</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                        <Label htmlFor="placeName">Place Name</Label>
                        <Input
                        type="text"
                        name="placeName"
                        onChange={(e) => this.setState({ placeName:e.target.value})}
                        value={this.state.placeName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">Address"</Label>
                        <Input
                        type="text"
                        name="address"
                        onChange={(e) => this.setState({address:e.target.value})}
                        value={this.state.address}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="latitude">Latitude</Label>
                        <Input
                        type="number"
                        name="latitude"
                        onChange={(e) => this.setState({latitude:e.target.value})}
                        value={this.state.latitude}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="longitude">Longitude</Label>
                        <Input
                        type="number"
                        name="longitude"
                        onChange={(e) => this.setState({longitude:e.target.value})}
                        value={this.state.longitude}
                        />
                    </FormGroup>
                </Form> 
                <Button onClick={this.props.closeModal}>Cancel</Button>
                <Button onClick={this.handleClick}>Update</Button>
                </ModalBody>
                </Modal>
            </div>
          );
    }
}
 
export default PlaceEdit;