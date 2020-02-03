import React, { Component } from "react";
import Post from "../../components/Post/Post";
import axios from "../../axios";
import { Route, Link } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostID: null,
    selectedTitle: null,
    selectedContent: null,
    errorStatus: false
  };

  componentDidMount() {
    console.log(this.props);
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
    // const foundPost = this.state.posts.find(post => post.id === id);
    // this.setState({
    //   selectedPostID: id,
    //   selectedTitle: foundPost.title,
    //   selectedContent: foundPost.body
    // });
    // this.props.history.push({ pathname: "/" + id });
    this.props.history.push("/posts/" + id);
  };

  render() {
    const posts = this.state.posts.map(post => (
      //   <Link to={"/posts/" + post.id} key={post.id}>
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        click={() => this.authorSelection(post.id)}
      />
      //   </Link>
    ));
    return (
      <section className="Posts">
        <div>
          {posts}
          <Route path="/posts/:id" exact component={FullPost} />
        </div>
      </section>
    );
  }
}

export default Posts;
