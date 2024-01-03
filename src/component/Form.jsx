import React from "react";
import "./appStyles.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: 'React',
    };
    // console.log(this.state.username)
  }

  handlerUserNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlerUserCommentChange = (event) => {
    this.setState({ comments: event.target.value });
  };

  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments}  ${this.state.topic}`)
    event
      .preventDefault();
  }

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
          <label>User Name</label>
          <input
            type="text"
            name={username}
            onChange={this.handlerUserNameChange}
          />{" "}
          <br />
        </div>

        <div>
          <label>Comments</label>
          <textarea
            type="text"
            name={comments}
            onChange={this.handlerUserCommentChange}
          />
        </div>

        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Flutter">Flutter</option>
          </select>
        </div>
        <button type='submit'>submit</button>
      </form>
    );
  }
}

export default Form;
