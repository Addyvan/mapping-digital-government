import gql from "graphql-tag";

const ADD_PEOPLE_TO_PROJECT = gql`
  mutation LinkPersonProject($projectId: ID!, $personId: ID!) {
    linkPersonProject(projectId: $projectId, personId: $personId) {
      id
    }
  }
`;

export default ADD_PEOPLE_TO_PROJECT;