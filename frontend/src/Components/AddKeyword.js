import React, { useState, Fragment } from "react";
const AddKeyword = props => {
  let { category, addKeyWordToCategory, getCategoriesQuery } = props;
  const [keyword, setKeyword] = useState("");
  const [enableKeyword, setenableKeyword] = useState(false);

  const onAddKeyWordToCategory = (category, addKeyWordToCategory, keyword) => {
    if (!enableKeyword) {
      setenableKeyword(true);
    } else {
      setKeyword("");
      addKeyWordToCategory({
        variables: { name: category.name, keyword },
        refetchQueries: [{ query: getCategoriesQuery }]
      });
    }
  };

  return (
    <div className="save-button-wrapper">
      {enableKeyword && (
        <input
          type="text"
          placeholder={`add keyword to ${category.name}`}
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      )}
      <button
        disabled={enableKeyword && !keyword}
        onClick={e =>
          onAddKeyWordToCategory(category, addKeyWordToCategory, keyword)
        }
        type="button"
        className="btn btn-outline-primary"
      >
        {enableKeyword ? "Save" : "+"}
      </button>
    </div>
  );
};

export { AddKeyword };
