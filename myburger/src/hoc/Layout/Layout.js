import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    console.log("sideDrawOpen");
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar clicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          showSiderDrawer={this.state.showSideDrawer}
          closeSideDraw={this.sideDrawerClosedHandler}
        />
        <main className={Classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
