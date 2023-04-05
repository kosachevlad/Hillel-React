import React from "react";

class Form extends React.Component {
  state = {
    postDesc: "",
    errorMessage: "",
  };

  handleAdd = () => {
    const { onAddPost } = this.props;
    const postDesc = this.state.postDesc.trim();
    let errorMessage = "";

    if (postDesc.length < 2 || postDesc.length > 7 ||
      !/[a-z]/.test(postDesc) || !/[A-Z]/.test(postDesc)) {
        errorMessage = 
      "Post description should have at least 1 capital letter, 1 lowercase letter, length between 2 and 7 characters";
      } else {
        const post = {
          id: new Date().getTime(),
          title: this.state.postDesc,
        };
        onAddPost(post);
        this.setState({
          postDesc: "",
          errorMessage: "",
        });  
      }
      this.setState({
        errorMessage: errorMessage,
    });
  };

  handlePostDescChange = (e) => {
    const inputValue = e.target.value;
    let errorMessage = "";

    if(!/^[a-zA-Z]{1}[a-z]{1,6}$/.test(inputValue)) {
      errorMessage = 
      "Post description should have at least 1 capital letter, 1 lowercase letter, length between 2 and 7 characters";
    }

    this.setState({
      postDesc: inputValue,
      errorMessage: errorMessage,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.errorMessage === "") {
      this.handleAdd();
    }
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <>
        <form className="addForm" onSubmit={this.handleSubmit}>
          <h2>Add Post</h2>
          <div>
            <input
              className="addFormInput"
              type="text"
              placeholder="Post"
              value={this.state.postDesc}
              onChange={this.handlePostDescChange}
            />
            <button className="buttonAdd" onClick={this.handleAdd}>Add</button>
          </div>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </form>
      </>
    );
  }
};

export default Form;
