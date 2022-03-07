import * as React from 'react';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap';
import { json } from 'stream/consumers';
import { ICreateRequestObject } from './TrailCreate.interface';

interface TrailCreateProps {
    token:string|null
}
 
interface TrailCreateState {
    trailName:string
    length:number
    description:string
    imageURL:URL
}
 
class TrailCreate extends React.Component<TrailCreateProps, TrailCreateState> {
    constructor(props: TrailCreateProps) {
        super(props);
        this.state = { trailName:"",
                        length:"",
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
        const url=`http://localhost:4000/trail/create`
        const requestObject:ICreateRequestObject={
            trailName:this.state.trailName,
            length:this.state.length,
            description:this.state.description,
            imageURL:this.state.imageURL
        }
        const response=await fetch(url,{
            method:"POST",
            body:JSON.stringify(this.requestObject),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
    const data=await response.json()
    console.log(data)
}
    render() { 
        return ( <div>
            <Form>
                <FormGroup>
                    <Label htmlFor="trailName">trailName</Label>
                    <Input
                    type="text"
                    name="trailName"
                    onChange={(e) => this.setState({ trailName: e.target.value})}
                    value={this.state.trailName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="length">length</Label>
                    <Input
                    type="number"
                    name="length"
                    onChange={(e) => this.setState({ length: e.target.value})}
                    value={this.state.length}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="description">description</Label>
                    <Input
                    type="text"
                    name="description"
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                    htmlFor="imageURL">imageURL</Label>
                    <Input
                    type="url"
                    name="imageURL"
                    />
                </FormGroup>
                <Button type="submit">Create a Trail</Button>
            </Form>
        </div> );
    }
}

export default TrailCreate;