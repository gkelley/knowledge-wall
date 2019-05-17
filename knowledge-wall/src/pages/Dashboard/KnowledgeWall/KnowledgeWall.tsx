import React, { Component } from "react";
import DashboardLayout from "../../../hoc/DashboardLayout/DashboardLayout";
import { bite } from "../../../models/models";
import Bites from "../../../components/Bites/Bites";
import { GetAllBites } from "../../../axios-firebase";

interface KnowledgeWallState {
  bites: bite[]
}
class KnowledgeWall extends Component {
  state: KnowledgeWallState = {
    bites: []
  };

  componentDidMount() {
    GetAllBites().then(response =>{
      this.setState({"bites": response});
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
