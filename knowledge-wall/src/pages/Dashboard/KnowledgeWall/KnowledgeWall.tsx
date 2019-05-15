import React, { Component } from "react";
import DashboardLayout from "../../../hoc/DashboardLayout/DashboardLayout";
import { bite, biteStatus, biteType } from "../../../models/models";
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
        //List of Keys
        // console.log(Object.keys(response.data));
        this.setState({ bites: Object.values(response.data) });
      })
      .catch(error => {
        //Todo
      });
  }

  render() {
    const mockBite: bite = {
      title: "Dependency Injection",
      description: "Why should I use DI in my next project?",
      author: "Griffin Kelley",
      commitment: null,
      dateCreated: new Date(),
      status: biteStatus.Active,
      type: biteType.Web,
      upvotes: 0
    };
    const mockBites = [mockBite, mockBite, mockBite, mockBite, mockBite];
    return (
      <DashboardLayout>
        { this.state.bites && (
          <Bites bites={this.state.bites} />
        )}
      </DashboardLayout>
    );
  }
}

export default KnowledgeWall;
