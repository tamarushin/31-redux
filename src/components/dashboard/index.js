
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { categoryCreate, categoryUpdate, categoryDestroy } from '../../action/category-actions';
import CategoryForm from '../category-form/index';
import CategoryItem from '../category-item/index';


const Dashboard = Props => {
  return (
    <Fragment>
      <h2>Dashboard</h2>
      <CategoryForm
        onComplete={Props.categoryCreate}
        buttonText="Create"
      />
      {Props.categories.map(category => (
        <li key={category.id}>
          <CategoryItem
            category={category}
            onComplete={Props.categoryUpdate}
            onDelete={Props.categoryDestroy}
          />
        </li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ categories: state });

const mapDispatchToProps = (dispatch) => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDestroy: category => dispatch(categoryDestroy(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);