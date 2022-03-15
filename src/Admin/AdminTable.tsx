import * as React from 'react';
import { Table } from 'reactstrap';
import { IAdminGetAll } from './AdminIndex.interface';
interface adminTableProps{
    users:IAdminGetAll[]
}
const AdminTable = (props:adminTableProps) => {
    const userMapper = () => {
        return props.users?.map((user, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>User Table</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>{userMapper()}</tbody>
        </Table>
        </>
    )
}

export default AdminTable;