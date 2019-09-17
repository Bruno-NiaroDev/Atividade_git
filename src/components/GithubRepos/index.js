import React, { Component } from "react";
import { FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import "./styles.css";

export default class GithubRepos extends Component {
  state = {
    repos: []
  };

  async atualizarRepos() {
    let { username } = this.props;

    if (!username) {
      username = "Bruno-NiaroDev";
    }

    const response = await fetch(
      `https://api.github.com/users/${username}`
    );
    const repos = await response.json();

    this.setState({ repos });

  }

  componentDidMount() {
    this.atualizarRepos();
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.atualizarRepos();
    return true;
  }

  render() {
    const { repos } = this.state;
    return (
      <div id="corpo">
        <img id="avatar" src={repos.avatar_url} alt="avatar"></img>
        <h1 id="labelNome">
          {repos.name}
        </h1>
        <h1 id="labelUsername">
          {repos.login}
        </h1>
        <div className="info">
          <p class="sub_title"><FaUserFriends /> {repos.company !== null ? repos.company : 'Não Informado'}</p>
          <p class="sub_title"><FaMapMarkerAlt /> {repos.location !== null ? repos.location : 'Não Informado'}</p>
        </div>
      </div >
    );
  }
}