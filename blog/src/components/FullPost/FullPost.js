import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = { loadedPost: null };

  componentDidUpdate() {
    if (
      this.props.id &&
      (!this.state.loadedPost || this.props.id !== this.state.loadedPost.id)
    ) {
      //   console.log(
      //     `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
      //   );
      axios.get(`/posts/${this.props.id}`).then(resolve => {
        this.setState({ loadedPost: resolve.data });
      });
    }
  }

  postDeleteHandler = () => {
    axios.delete(`/posts/${this.props.id}`).then(resolve => {
      console.log(resolve);
    });
  };

  render() {
    let post = <p>Please select a Post!</p>;
    // console.log(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`);

    if (this.props.id && this.state.loadedPost) {
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
