import React, { Component } from "react";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          title: "电商网站",
          category: "网页设计"
        },
        {
          title: "社交APP",
          category: "h5开发"
        },
        {
          title: "购物车",
          category: "网页组件"
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <AddProject/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
