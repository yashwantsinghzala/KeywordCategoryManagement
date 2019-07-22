import React from "react";
const DeleteKeyword = props => {
  let { category, deleteKeyword, keyword, getCategoriesQuery } = props;
  const onDeleteKeyWord = (category, keyword, deleteKeyword) => {
    deleteKeyword({
      variables: { name: category.name, keyword },
      refetchQueries: [{ query: getCategoriesQuery }]
    });
  };

  return (
    <span
      onClick={e => onDeleteKeyWord(category, keyword, deleteKeyword)}
      className="delete-btn"
    >
      x
    </span>
  );
};

export { DeleteKeyword };
