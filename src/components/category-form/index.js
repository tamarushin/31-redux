import React, { Component } from 'react';

class CategoryForm extends Component {

  constructor(Props) {
    super(Props);
    this.defaultState = {
      name: '',
      budget: '',
    };

    const initialState = this.Props.category || this.defaultState;

    this.state = { ...initialState };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.Props.onComplete(this.state);
    this.setState({ ...this.defaultState });
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
        <button>{this.Props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;