import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = { loadedPost: null };

  componentDidMount() {
    console.log("Component Did mount");
    this.loadData();
  }

  componentDidUpdate() {
    console.log("Component Did update");
    this.loadData();
  }

  loadData = () => {
    if (
      this.props.match.params.id &&
      (!this.state.loadedPost ||
        +this.props.match.params.id !== this.state.loadedPost.id)
    ) {
      console.log("Param ID: ", this.props.match.params.id);
      axios.get(`/posts/${this.props.match.params.id}`).then(resolve => {
        this.setState({ loadedPost: resolve.data });
      });
    }
  };
  postDeleteHandler = () => {
    axios.delete(`/posts/${this.props.match.params.id}`).then(resolve => {
      console.log(resolve);
    });
  };

  render() {
    let post = <p>Please select a Post!</p>;
    // console.log(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`);

    if (this.props.match.params.id && this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          {/* <h1>{this.props.title}</h1>
          <p>{this.props.content}</p> */}
          <div className="Edit">
            <button onClick={this.postDeleteHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
