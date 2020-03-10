import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem exact link="/">
      Burger Builder
    </NavigationItem>
    {/* <NavigationItem link="/">Checkout</NavigationItem> */}
    <NavigationItem exact link="/orders">
      Orders
    </NavigationItem>
  </ul>
);

export default navigationItems;
