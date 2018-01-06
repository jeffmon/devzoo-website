import React, { Component } from "react";
import TeamCard from "../Components/TeamCard";

class Team extends Component {
  render() {
    return (
      <div className="team_container">
        <div className="team_title">TEAM ZOO</div>
        <TeamCard />
      </div>
    );
  }
}

export default Team;
