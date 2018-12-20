import React, { Component } from 'react';

class CategoryForm extends Component {


  constructor(props) {

    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : '',
      id: props.category ? props.category.id : '',
      timestamp: props.category ? props.category.timestamp : null
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.state });
  }

  handleCategoryChange(event) {
    this.setState({ name: event.target.value });
  }

  handleBudgetChange(event) {
    this.setState({ budget: event.target.value });
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <label >NAME</label>
        <input
          name="name"
          placeholder="name"
          type='text'
          value={this.state.name}
          onChange={this.handleCategoryChange}
        />
        <label > BUDGET</label>
        <input
          budget="budget"
          placeholder="budget"
          type='number'
          value={this.state.budget}
          onChange={this.handleBudgetChange}
        />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;