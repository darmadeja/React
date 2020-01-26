import axios from "../../axios";
import React, { Component } from "react";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostID: null,
    selectedTitle: null,
    selectedContent: null,
    errorStatus: false
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map(post => {
          return {
            ...post,
            author: "Deja"
          };
        });
        this.setState({ posts: updatedPost });
      })
      .catch(error => {
        console.log(error.response);
        console.log(error.request);
        console.log("Error : ", error.message);
        return this.setState({ errorStatus: true });
      });
  }

  authorSelection = id => {
    const foundPost = this.state.posts.find(post => post.id === id);
    this.setState({
      selectedPostID: id,
      selectedTitle: foundPost.title,
      selectedContent: foundPost.body
    });
  };

  render() {
    // console.log("Posts", this.state.posts);
    let posts = <p style={{ textAlign: "center" }}>Something ent wrong </p>;

    if (!this.state.errorStatus)
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            click={() => this.authorSelection(post.id)}
          />
        );
      });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost
            id={this.state.selectedPostID}
            title={this.state.selectedTitle}
            content={this.state.selectedContent}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
