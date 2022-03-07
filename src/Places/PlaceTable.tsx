import React from 'react';
import { Button, Table } from 'reactstrap';
import { IPlaceGetAll } from './PlaceIndex.interface';
export interface PlaceTableProps {
    token:string|null
    places:IPlaceGetAll[]
}

function PlaceTable(props:PlaceTableProps) {
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
                    <Button color='warning' >Update</Button>
                    <Button color='danger' >Delete</Button>
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