import * as React from 'react';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap';
import APIURL from '../helpers/environment';
import { ICreateRequestObject } from './PlaceCreate.interface';

interface PlaceCreateProps {
    token:string|null
    fetchPlaces: () => void
}
 
interface PlaceCreateState {
    placeName:string
    address:string
    latitude:string
    longitude:string
}
 
class PlaceCreate extends React.Component<PlaceCreateProps, PlaceCreateState> {
    constructor(props: PlaceCreateProps) {
        super(props);
        this.state = { placeName:"",
                        address:"",
                        latitude:"",
                        longitude:"",
                      };
    }

    handleSubmit=async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (this.props.token===null) {
            alert("No token detected")
            return
        }
        console.log("handleSubmit was called");
        const url=`${APIURL}/place/create`
        const requestObject:ICreateRequestObject={
            placeName:this.state.placeName,
            address:this.state.address,
            latitude:this.state.latitude,
            longitude:this.state.longitude,
        }
        const response=await fetch(url,{
            method:"POST",
            body:JSON.stringify(requestObject),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        const data=await response.json()
        console.log(data)
        this.props.fetchPlaces()
        this.setState({
            placeName: '',
            address: '',
            latitude: '',
            longitude: ''
        })

        // This point we should refresh the table by calling this.props.fetchplaces
        // We need to clear all the state to empty strings
    }
    render() { 
        return ( 
        <div>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="placeName">Place Name</Label>
                    <Input
                    type="text"
                    name="placeName"
                    placeholder='Place Name'
                    onChange={(e) => this.setState({ placeName: e.target.value})}
                    value={this.state.placeName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="address">Address</Label>
                    <Input
                    type="text"
                    name="address"
                    placeholder='Address'
                    onChange={(e) => this.setState({
                    address:e.target.value})}
                    value={this.state.address}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="latitude">Latitude</Label>
                    <Input
                    type="number"
                    name="latitude"
                    placeholder='Latitude'
                    onChange={(e) => this.setState({
                    latitude:e.target.value})}
                    value={this.state.latitude}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="longitude">Longitude</Label>
                    <Input
                    type="number"
                    name="longitude"
                    placeholder='Longitude'
                    onChange={(e) => this.setState({
                    longitude:e.target.value})}
                    value={this.state.longitude}
                    />
                </FormGroup>
                <Button type="submit">Create a Place</Button>
            </Form>
        </div> );
    }
}
 
export default PlaceCreate;