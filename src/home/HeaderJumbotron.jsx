import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const HeaderJumboTron = (props) => {
  return (
    <div>
      <div class="jumbotron customheader">
  <h1 class="display-5 fw-bold">Bike</h1>
  <p class="lead display-5">This is an app for mountain bikers, a simple place for information about places to ride mountain bikes in Indiana.</p>
  <hr class="my-4"/>
  <p>Users can store, read, update and delete information.</p>
  <p class="lead">
    {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
  </p>
</div>
    </div>
  );
};

export default HeaderJumboTron;