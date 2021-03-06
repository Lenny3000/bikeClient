import * as React from 'react';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap';
import APIURL from '../helpers/environment';
import { ICreateRequestObject } from './TrailCreate.interface';

interface TrailCreateProps {
    token:string|null
    fetchTrails: () => void
}
 
interface TrailCreateState {
    trailName:string
    length:number
    description:string
    imageURL:string
}
 
class TrailCreate extends React.Component<TrailCreateProps, TrailCreateState> {
    constructor(props: TrailCreateProps) {
        super(props);
        this.state = { trailName:"",
                        length:0,
                        description:"",
                        imageURL:"",};
    }

    handleSubmit=async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (this.props.token===null) {
            alert("No token detected")
            return
        }
        console.log("handleSubmit was called");
        const url=`${APIURL}/trail/create`
        const requestObject:ICreateRequestObject={
            trailName:this.state.trailName,
            length:this.state.length,
            description:this.state.description,
            imageURL:this.state.imageURL
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
    this.props.fetchTrails()
    this.setState({
        trailName: '',
        length: 0,
        description: '',
        imageURL: ''
    })
}
    render() { 
        return ( <div>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="trailName">Trail Name</Label>
                    <Input
                    type="text"
                    name="trailName"
                    placeholder='Trail Name'
                    onChange={(e) => this.setState({ trailName: e.target.value})}
                    value={this.state.trailName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="length">Length</Label>
                    <Input
                    type="number"
                    name="length"
                    placeholder='Length'
                    onChange={(e) => this.setState({ length: +e.target.value})}
                    value={this.state.length}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="description">Description</Label>
                    <Input
                    type="text"
                    name="description"
                    placeholder='Description'
                    onChange={(e) => this.setState({ description: e.target.value})}
                    value={this.state.description}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="imageURL">Image URL</Label>
                    <Input
                    type="url"
                    name="imageURL"
                    placeholder='Image URL'
                    onChange={(e) => this.setState({ imageURL: e.target.value})}
                    value={this.state.imageURL}
                    />
                </FormGroup>
                <Button type="submit">Create a Trail</Button>
            </Form>
        </div> );
    }
}

export default TrailCreate;