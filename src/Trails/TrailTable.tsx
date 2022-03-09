import * as React from 'react';
import {Table, Button} from 'reactstrap';
import { ITrailGetAll } from './TrailIndex.interface';
export interface TrailTableProps {
    token:string|null
    trails:ITrailGetAll[]
    fetchTrails: () => void
}

function TrailTable(props:TrailTableProps) {
    const deleteTrail = (trail:ITrailGetAll) =>
    {
        if (props.token === null) {
            alert("No token detected");
            return;
        }
        console.log("delete button was clicked")
        fetch(`http://localhost:4000/trail/${trail.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchTrails())
    }
    const trailMapper = () => {
        return props.trails?.map((trail, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{trail.id}</th>
                    <td>{trail.trailName}</td>
                    <td>{trail.length}</td>
                    <td>{trail.description}</td>
                    <td><img src={trail.imageURL} /></td>
                    <td>
                        <Button color='warning' >Update</Button>
                        <Button color='danger' onClick={() => {deleteTrail(trail)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>Trails</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Trail Name</th>
                    <th>Length (mi.)</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {trailMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default TrailTable;