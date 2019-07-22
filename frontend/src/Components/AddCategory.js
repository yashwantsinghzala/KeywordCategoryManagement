import React, { useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { addCategoryQuery, getCategoriesQuery } from '../queries/queries'

const AddCategory = ({ addCategory }) => {
  const [categoryName, setCategory] = useState('');

  const onAddCategory = (e, addCategory) => { 
    addCategory(
      {
        variables: { name: categoryName },
        refetchQueries: [{ query: getCategoriesQuery }]
      })
      setCategory('')
  };

  return (
    <div className="addCategory">
      <input
        type="text"
        placeholder="enter category name"
        value={categoryName}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button disabled= {!categoryName}onClick={(e) => onAddCategory(e, addCategory)}
        type="button" className="btn btn-outline-primary">Add Category</button>
    </div>
  )
}

export default compose(
  graphql(addCategoryQuery, { name: "addCategory" })
)(AddCategory);