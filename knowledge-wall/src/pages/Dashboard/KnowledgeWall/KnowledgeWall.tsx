import React, { Component } from "react";
import DashboardLayout from "../../../hoc/DashboardLayout/DashboardLayout";
import { bite } from "../../../models/models";
import Bites from "../../../components/Bites/Bites";
import firebaseInstance from "../../../axios-firebase";

interface KnowledgeWallState {
  bites: bite[]
}
class KnowledgeWall extends Component {
  state: KnowledgeWallState = {
    bites: []
  };

  componentDidMount() {
    firebaseInstance
      .get("/bites.json")
      .then(response => {
        let transformedData = Object.keys(response.data).map(function (i) {
          return {id: i, biteData: response.data[i]};
        });
        console.log(transformedData);
        this.setState({ bites: transformedData });
      })
      .catch(error => {
        //Todo
      });
  }

  render() {
   
    return (
      <DashboardLayout>
        { this.state.bites && this.state.bites.length > 0 && (
          <Bites bites={this.state.bites} />
        )}
      </DashboardLayout>
    );
  }
}

export default KnowledgeWall;
