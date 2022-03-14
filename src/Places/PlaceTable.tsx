import * as React from "react";

import { Button, Table } from "reactstrap";
import APIURL from "../helpers/environment";
import PlaceEdit from "./PlaceEdit";
import { IEditRequestObject } from "./PlaceEdit.interface";
import { IPlaceGetAll } from "./PlaceIndex.interface";
export interface PlaceTableProps {
  token: string | null;
  places: IPlaceGetAll[];
  fetchPlaces: () => void;
}

function PlaceTable(props: PlaceTableProps) {
  const [currentPlaceData, setcurrentPlaceData] =
    React.useState<IEditRequestObject>({} as IEditRequestObject);
  const [openModal, setOpenModal] = React.useState(false);
  const deletePlace = (place: IPlaceGetAll) => {
    if (props.token === null) {
      alert("No token detected");
      return;
    }
    console.log("delete button was clicked");
    fetch(`${APIURL}/place/${place.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchPlaces());
  };
  const editPlace = (place: IEditRequestObject) => {
    console.log(place);
    setcurrentPlaceData(place);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  React.useEffect(() => {
    if (Object.keys(currentPlaceData).length !== 0) {
      setOpenModal(true);
    }
  }, [currentPlaceData]);
  const editPlaceFetch = (place: IEditRequestObject) => {
    if (props.token === null) {
      alert("No token detected");
      return;
    }
    const requestObject: Omit<IEditRequestObject, "id"> = {
      placeName: place.placeName,
      address: place.address,
      latitude: place.latitude,
      longitude: place.longitude,
    };
    console.log("edit button was clicked");
    fetch(`${APIURL}/place/${place.id}`, {
      method: "PUT",
      body: JSON.stringify(requestObject),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => {props.fetchPlaces()
    setOpenModal(false)
    });
  };

  const placeMapper = () => {
    return props.places?.map((place, index) => {
      return (
        <tr key={index}>
          <th scope="row">{place.id}</th>
          <td>{place.placeName}</td>
          <td>{place.address}</td>
          <td>{place.latitude}</td>
          <td>{place.longitude}</td>
          <td>
            <Button class="editButton"
              onClick={() => {
                editPlace(place);
              }}
            >
              Edit
            </Button>
            <Button
              class="deleteButton"
              onClick={() => {
                deletePlace(place);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <h3>Places</h3>
      <hr />
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
        <tbody>{placeMapper()}</tbody>
      </Table>
      {openModal ? (
        <PlaceEdit
          token={props.token}
          fetchPlaces={props.fetchPlaces}
          closeModal={closeModal}
          currentPlaceData={currentPlaceData}
          editPlaceFetch={editPlaceFetch}
        />
      ) : null}
    </>
  );
}

export default PlaceTable;


