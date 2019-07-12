import React from "react";
import { Jumbotron, Button } from 'reactstrap';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Jumbotron>
          <h1 className="display-3">DEREK BOT 5000</h1>
          <p className="lead">Derek Bot 5000 is committed to storing all Derek Alton knowledge. ALL KNOWLEDGE.</p>
          <hr className="my-2" />
          <p>
            It uses a Prisma GraphQL + Apollo Server backend on top of a PostgreSQL database all hosted in a kubernetes cluster.  
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;