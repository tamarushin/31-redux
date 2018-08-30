
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createCategory, updateCategory, destroyCategory } from '';
import CategoryForm from '../category-form/index';
import CategoryItem from '../category-item/index';


const Dashboard = Props => {
  return (
    <Fragment>
      <CategoryForm onComplete={Props.createCategory} buttonText="Create" />
      {Props.categories.map(category => (
        <li key={category.id}>
          <CategoryItem category={category} onComplete={Props.updateCategory} onDelete={Props.destroyCategory} />
        </li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ categories: state });

const mapDispatchToProps = (dispatch) => ({
  createCategory: category => dispatch(createCategory(category)),
  updateCategory: category => dispatch(updateCategory(category)),
  destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);