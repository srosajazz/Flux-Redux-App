import React, { Component, Fragment } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.render.handleAddRepository}>
          <input
            placeholder="user/repository"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>

          <ul>
            <li>
              <p>
                <strong>facebook/react</strong> (A declarative, efficient, and flexible JavaScript
                library for building user interfaces.)
              </p>
              <a href="https://github.com/facebook/react">Access Github</a>
            </li>
          </ul>
        </form>
      </Fragment>
    );
  }
}
