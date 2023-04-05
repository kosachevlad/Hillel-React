import React from "react";
import Form from "./Form";

class Http extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPostId: null,
      editingPost: null,
      editedPostTitle: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const randomPosts = [];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * data.length);
          randomPosts.push(data[randomIndex]);
        }
        this.setState({ posts: randomPosts });
      });
  }

  handleSelect = (postId) => {
    this.setState({ selectedPostId: postId });
  };

  handleDelete = () => {
    const { selectedPostId, posts } = this.state;
    if (selectedPostId !== null) {
      const updatedPosts = posts.filter((post) => post.id !== selectedPostId);
      this.setState({
        posts: updatedPosts,
        selectedPostId: null,
      });
    }
  };

  handleEdit = () => {
    const { selectedPostId, editingPost, editedPostTitle, posts } = this.state;
    if (editingPost === null && selectedPostId !== null) {
      this.setState({
        editingPost: selectedPostId,
        editedPostTitle: posts.find((post) => post.id === selectedPostId).title,
      });
    } else {
      const updatedPosts = posts.map((post) => {
        if (post.id === editingPost) {
          return { ...post, title: editedPostTitle };
        }
        return post;
      });
      this.setState({
        posts: updatedPosts,
        editingPost: null,
        editedPostTitle: "",
      });
    }
  };

  handleAddPost = (newPost) => {
    const updatedPosts = [...this.state.posts, newPost];
    this.setState({
      posts: updatedPosts,
    })
  }

  render() {
    const { posts, selectedPostId, editingPost, editedPostTitle } = this.state;
    return (
      <div className="container">
        <h1 className="posts">Posts</h1>
        <ul>
          {posts.map((post, index) => (
            <li
              key={`${post.id}-${index}`}
              onClick={() => this.handleSelect(post.id)}
              className={selectedPostId === post.id ? "selected" : ""}
            >
              {editingPost === post.id ? (
                <input
                  type="text"
                  value={editedPostTitle}
                  onChange={(event) =>
                    this.setState({ editedPostTitle: event.target.value })
                  }
                />
              ) : (
                post.title
              )}
            </li>
          ))}
        </ul>
        <button onClick={this.handleDelete}>
          Delete
        </button>
        <button onClick={this.handleEdit}>
          {editingPost === null ? "Edit" : "Save"}
        </button> 
        <Form 
          posts={this.state.posts} onAddPost={this.handleAddPost}
        />      
      </div>
    );
  }
}

export default Http;
