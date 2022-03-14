import * as React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../helpers/environment';
import TrailEdit from './TrailEdit';
import { IEditRequestObject } from './TrailEdit.interface';
import { ITrailGetAll } from './TrailIndex.interface';
export interface TrailTableProps {
    token:string|null
    trails:ITrailGetAll[]
    fetchTrails: () => void
}

function TrailTable(props:TrailTableProps) {
    const [currentTrailData, setcurrentTrailData] = React.useState<IEditRequestObject>({} as IEditRequestObject);
    const [openModal, setOpenModal] = React.useState(false);
    const deleteTrail = (trail:ITrailGetAll) =>
    {
        if (props.token === null) {
            alert("No token detected");
            return;
        }
        console.log("delete button was clicked")
        fetch(`${APIURL}/trail/${trail.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchTrails())
    }
    const editTrail =
    (trail:IEditRequestObject) => {
        console.log(trail);
        setcurrentTrailData(trail);
        if (props.token === null) {
            alert("No token detected");
            return;
        }
        console.log("edit button was clicked")
        fetch(`${APIURL}/trail/${trail.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchTrails())
    }

    const closeModal = () => {
        setOpenModal(false);
    };
    React.useEffect(() => {
        if (Object.keys(currentTrailData).length !== 0) {
            setOpenModal(true);
        }
    }, [currentTrailData]);
    const editTrailFetch = (trail: IEditRequestObject) => {
        if (props.token === null) {
            alert("No token detected");
            return;
        }
        const requestObject: Omit<IEditRequestObject, "id"> = {
            trailName: trail.trailName,
            length: trail.length,
            description: trail.description,
            imageURL: trail.imageURL,
        };
        fetch(`${APIURL}/trail/${trail.id}`, {
            method: "PUT",
            body: JSON.stringify(requestObject),
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: props.token,
            }),
          }).then(() => {props.fetchTrails()
          setOpenModal(false)
          });
        };
    const trailMapper = () => {
        return props.trails?.map((trail, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{trail.trailName}</td>
                    <td>{trail.length}</td>
                    <td>{trail.description}</td>
                    <td><img src={trail.imageURL} 
                    // alt="" 
                    className='image'/></td>
                    <td>
                        <Button class="editButton" onClick={() => {editTrail(trail)}} >Edit</Button>
                        <Button class="deleteButton" onClick={() => {deleteTrail(trail)}}>Delete</Button>
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
                    <th>#</th>
                    <th>Trail Name</th>
                    <th>Length (mi.)</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>{trailMapper()}</tbody>
        </Table>
        {openModal ? (
        <TrailEdit
            token={props.token}
            fetchTrails={props.fetchTrails}
            closeModal={closeModal}
            currentTrailData={currentTrailData}
            editTrailFetch={editTrailFetch}
            />
            ): null}
        </>
    )
}

export default TrailTable;