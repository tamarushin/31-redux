import React, { Component } from 'react';
import CategoryForm from '../catagory-form/index';
import './category-item.scss';

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.showEditForm = this.showEditForm.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  showEditForm() {
    this.setState({ editing: true });
  }

  updateCategory(category) {
    this.setState({
      editing: false,
    });
    this.Props.onComplete(category);
  }

  deleteCategory() {
    this.Props.onDelete(this.Props.category);
  }


  render() {
    return (
      <div>
        <span onClick={this.showEditForm}>{this.Props.category.name}</span>
        <span id='budget-item' onClick={this.showEditForm}>${this.Props.category.budget}</span>
        <button onClick={this.deleteCategory}>Delete</button>
        {this.state.editing && <CategoryForm onComplete={this.updateCategory} buttonText="update" category={this.Props.category} />}
      </div>
    );
  }
}