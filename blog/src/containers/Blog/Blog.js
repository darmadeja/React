import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
import Posts from "../Posts/Posts";
// import NewPost from "../NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
  return import("../NewPost/NewPost");
});

class Blog extends Component {
  state = { auth: true };
  render() {
    const rootRoute = "/posts";
    const newPostRoute = "/new-post";
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to={rootRoute}
                  exact
                  activeStyle={{
                    textDecoration: "underline",
                    color: "#fa923f"
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: newPostRoute,
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* <Route path="/" exact render={() => <h1> Home </h1>} />
          <Route path="/new-post" exact render={() => <h1> Home 2 </h1>} /> */}
          <Switch>
            {this.state.auth ? (
              // <Route path={newPostRoute} exact component={NewPost} />
              <Route path={newPostRoute} component={AsyncNewPost} />
            ) : null}
            <Route path={rootRoute} component={Posts} />
            {/* <Redirect from="/" to={rootRoute} /> */}
            <Route render={() => <h1>Not Found </h1>} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default Blog;
