import React, { Component } from "react";
class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          title: data.title,
          body: data.id
        });
      });
  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }
  render() {
    const { id, title } = this.state;

    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Test;
