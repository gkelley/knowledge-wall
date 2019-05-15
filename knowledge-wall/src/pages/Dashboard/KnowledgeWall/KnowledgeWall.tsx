import React, { Component } from "react";
import DashboardLayout from "../../../hoc/DashboardLayout/DashboardLayout";
import { bite, biteStatus, biteType } from "../../../models/models";
import Bites from "../../../components/Bites/Bites";

class KnowledgeWall extends Component {
  render() {
    const mockBite : bite = {
      title: "Dependency Injection",
      description: "Why should I use DI in my next project?",
      author: "Griffin Kelley",
      commitment: null,
      dateCreated: new Date(),
      status: biteStatus.Active,
      type: biteType.Web,
      upvotes: 0
    }
    const mockBites = [mockBite,mockBite,mockBite,mockBite,mockBite];
    return (
      <DashboardLayout>
        <Bites bites={mockBites}/>
      </DashboardLayout>
    );
  }
}

export default KnowledgeWall;
