import React from "react";

import {Query} from "react-apollo";
import PROJECT_OVERVIEW from "../../gql/PROJECT_OVERVIEW";

import { Spinner } from "reactstrap";

import { Card, CardTitle, CardText } from 'reactstrap';

class ProjectOverview extends React.Component {

  render() {
    return(
      <Query query={PROJECT_OVERVIEW} variables={{id: this.props.id}}>
        {
          ({ loading, error, data }) => {
            if (loading) return (<Spinner color="primary" />);
            if (error) { console.log(error); return; }

            if (data) {
              return (
                <Card body>
                  <CardTitle><h4>{data.projects[0].name}</h4></CardTitle>
                  <CardText>{data.projects[0].description}</CardText>
                </Card>
              )
            }
          }
        }
      </Query>
    );
  }
}

export default ProjectOverview;