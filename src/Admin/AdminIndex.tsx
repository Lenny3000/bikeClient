import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import APIURL from '../helpers/environment';
import { IAdminGetAll } from './AdminIndex.interface';
import AdminTable from './AdminTable';

interface AdminIndexProps {
    token: string | null;
}
 
interface AdminIndexState {
    users: IAdminGetAll[];
}
 
class AdminIndex extends React.Component<AdminIndexProps, AdminIndexState> {
    constructor(props: AdminIndexProps) {
        super(props);
        this.state = { users: [] };
    }
    fetchUsers = () => {
        if (this.props.token === null) {
          alert("No token detected");
          return;
        }
        fetch(`${APIURL}/user/userinfo/`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token,
          }),
        })
          .then((res) => res.json())
          .then((data:IAdminGetAll[]) => {
            this.setState({users:data})        
            console.log(data);
          });
      };
      componentDidMount() {
        this.fetchUsers();
      }
    render() { 
        return ( 
            <Container>
            <Row>
              <Col md="9">
                  <AdminTable users={this.state.users}/>
                {/* <TrailCreate fetchTrails={this.fetchTrails} token={this.props.token} /> */}
              </Col>
              <Col md="3">
                {/* <TrailTable fetchTrails={this.fetchTrails}token={this.props.token} trails={this.state.trails}/> */}
              </Col>
              {/* <TrailEdit /> */}
            </Row>
          </Container>
         );
    }
}
 
export default AdminIndex;