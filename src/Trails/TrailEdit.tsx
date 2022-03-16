import * as React from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { IEditRequestObject } from './TrailEdit.interface';

interface TrailEditProps {
    token:string|null
    fetchTrails: () => void
    closeModal: () => void
    currentTrailData: IEditRequestObject
    editTrailFetch:(trail: IEditRequestObject) => void
}
 
interface TrailEditState {
    trailName:string
    length:number
    description:string
    imageURL:string
}
 
class TrailEdit extends React.Component<TrailEditProps, TrailEditState> {
    constructor(props: TrailEditProps) {
        super(props);
        this.state = { 
            trailName: this.props.currentTrailData.trailName,
            length:this.props.currentTrailData.length,
            description:this.props.currentTrailData.description,
            imageURL:this.props.currentTrailData.imageURL };
    }
    handleClick=()=>{
        const requestObject:IEditRequestObject={
            id:this.props.currentTrailData.id,
            trailName:this.state.trailName,
            length:this.state.length,
            description:this.state.description,
            imageURL:this.state.imageURL
        }
        this.props.editTrailFetch(requestObject)
        console.log("handleClick was called");
    }
    
    render() { 
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Edit a Trail</ModalHeader>
                    <ModalBody>
                <Form>
                    <FormGroup>
                        <Label htmlFor="trailName">Trail Name</Label>
                        <Input
                        type="text"
                        name="trailName"
                        onChange={(e) => this.setState({ trailName:e.target.value})}
                        value={this.state.trailName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="length">Length</Label>
                        <Input
                        type="number"
                        name="length"
                        onChange={(e) => this.setState({length:+e.target.value})}
                        value={this.state.length}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Description</Label>
                        <Input
                        type="text"
                        name="description"
                        onChange={(e) => this.setState({description:e.target.value})}
                        value={this.state.description}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="imageURL">Image URL</Label>
                        <Input
                        type="url"
                        name="imageURL"
                        onChange={(e) => this.setState({imageURL:e.target.value})}
                        value={this.state.imageURL}
                        />
                    </FormGroup>
                </Form> 
                <Button onClick={this.props.closeModal}
                >Cancel</Button>
                <Button onClick={this.handleClick}
                >Update</Button>
                </ModalBody>
                </Modal>
            </div>
          );
    }
}
 
export default TrailEdit;