import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import TrailCreate from "./TrailCreate";
import { ITrailGetAll } from "./TrailIndex.interface";
import TrailTable from "./TrailTable";
import APIURL from '../helpers/environment';

interface TrailIndexProps {
  token: string | null;
}

interface TrailIndexState {
  trails: ITrailGetAll[];
}

class TrailIndex extends React.Component<TrailIndexProps, TrailIndexState> {
  constructor(props: TrailIndexProps) {
    super(props);
    this.state = { trails: [] };
  }
  fetchTrails = () => {
    if (this.props.token === null) {
      alert("No token detected");
      return;
    }
    fetch(`${APIURL}/trail/get`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((data:ITrailGetAll[]) => {
        this.setState({trails:data})        
        console.log(data);
      });
  };
  componentDidMount() {
    this.fetchTrails();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            <TrailCreate fetchTrails={this.fetchTrails} token={this.props.token} />
          </Col>
          <Col md="9">
            <TrailTable fetchTrails={this.fetchTrails}token={this.props.token} trails={this.state.trails}/>
          </Col>
          {/* <TrailEdit /> */}
        </Row>
      </Container>
    );
  }
}

export default TrailIndex;
