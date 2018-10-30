import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "./store/actions";

import "./App.css";

class App extends Component {
  state = {
    value: ""
  };

  onChangeHandler = e => {
    e.preventDefault();

    const updateState = {
      ...this.state
    };
    updateState.value = e.target.value;
    this.setState({ value: updateState.value });
  };

  render() {
    return (
      <div className="App">
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.addHandler}>add +</button>
        <button onClick={this.props.subHandler}>sub -</button>
        <input
          name="comment"
          type="text"
          onChange={e => this.onChangeHandler(e)}
        />
        <button onClick={() => this.props.onComment(this.state.value)}>
          comment
        </button>

        <ul>
          {this.props.comment.map((i, index) => (
            <li onClick={() => this.props.deleteComment(index)} key={index}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  comment: state.comment
});
export default connect(
  mapStateToProps,
  actions
)(App);
