import React, { Component } from 'react';


class AddProject extends Component {

  constructor() {
    super();
    this.state = {
      newProject: {} 
    }
  }

  static defaultProps = {
    categories: ['网页开发','h5开发','网页组件']
  }

  handleSubmit(e) {
    console.log(this.refs.title.value);
    if(this.refs.title.value == '') {
      alert('Title is required')
    }
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    })
    return (
      <div>
        <h3>Add Project</h3>  
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label> <br />
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category</label> <br />
            <select ref="category">
              {categoryOptions}
            </select>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
