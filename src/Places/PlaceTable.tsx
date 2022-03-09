import React from 'react';
import { Button, Table } from 'reactstrap';
import { IEditRequestObject } from './PlaceEdit.interface';
import { IPlaceGetAll } from './PlaceIndex.interface';
export interface PlaceTableProps {
    token:string|null
    places:IPlaceGetAll[]
    fetchPlaces: () => void
}

function PlaceTable(props:PlaceTableProps) {
    const deletePlace = (place:IPlaceGetAll) => {
        if (props.token === null) {
            alert("No token detected");
            return;
          }
        console.log("delete button was clicked")
        fetch(`http://localhost:4000/place/${place.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchPlaces())
    }
    const editPlace = (place:IEditRequestObject) => {
        if (props.token === null) {
            alert("No token detected");
            return;
          }
        console.log("edit button was clicked")
        fetch(`http://localhost:4000/place/${place.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchPlaces())
    }
    
    const placeMapper = () => {
        return props.places?.map((place, index)=> {
            return(
                <tr key={index}>
                <th scope="row">{place.id}</th>
                <td>{place.placeName}</td>
                <td>{place.address}</td>
                <td>{place.latitude}</td>
                <td>{place.longitude}</td>
                <td>
                    <Button color='warning' onClick={() => {editPlace(place)}}>Edit</Button>
                    <Button color='danger' onClick={() => {deletePlace(place)}}  >Delete</Button>
                </td>
            </tr>
            )
        })
    }
    return (
        <>
        <h3>Places</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Place Name</th>
                    <th>Address</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
            </thead>
            <tbody>
                {placeMapper()}
            </tbody>
        </Table>
        </>
    );
}

export default PlaceTable;