import React from "react";

import GithubRepos from "./components/GithubRepos";

class App extends React.Component {
  state = {
    inputText: "",
    username: ""
  };

  handleUsernameChange = e => {
    this.setState({ inputText: e.target.value }, () => {
      console.log(this.state);
    });
  };

  handleButtonClick = e => {
    this.setState({ ...this.state, username: this.state.inputText }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          onChange={this.handleUsernameChange}
          value={this.state.inputText}
        />
        <button onClick={this.handleButtonClick}>Atualizar</button>
        <GithubRepos username={this.state.username} />
      </>
    );
  }
}

export default App;