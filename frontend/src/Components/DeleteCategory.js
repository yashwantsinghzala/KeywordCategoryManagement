import React from "react";
const DeleteCategory = props => {
  let { category, deleteCategory, getCategoriesQuery } = props;
  const onDeleteCategory = (category, deleteCategory) => {
    deleteCategory({
      variables: { name: category.name },
      refetchQueries: [{ query: getCategoriesQuery }]
    });
  };

  return (
    <span
      onClick={e => onDeleteCategory(category, deleteCategory)}
      className="delete-btn"
    >
      x
    </span>
  );
};

export { DeleteCategory };
