import * as React from 'react';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap';
import { json } from 'stream/consumers';
import { ICreateRequestObject } from './PlaceCreate.interface';

interface PlaceCreateProps {
    token:string|null
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
        const url=`http://localhost:4000/place/create`
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
    }
    render() { 
        return ( 
        <div>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="placeName">placeName</Label>
                    <Input
                    type="text"
                    name="placeName"
                    onChange={(e) => this.setState({ placeName: e.target.value})}
                    value={this.state.placeName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="address">address</Label>
                    <Input
                    type="text"
                    name="address"
                    onChange={(e) => this.setState({
                    address:e.target.value})}
                    value={this.state.address}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="latitude">latitude</Label>
                    <Input
                    type="number"
                    name="latitude"
                    onChange={(e) => this.setState({
                    latitude:e.target.value})}
                    value={this.state.latitude}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="longitude">longitude</Label>
                    <Input
                    type="number"
                    name="longitude"
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