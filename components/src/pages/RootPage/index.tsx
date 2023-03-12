import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class RootPage extends Component {
  render() {
    return (
      <div>
        I am root page
        <Outlet />
      </div>
    );
  }
}

export default RootPage;