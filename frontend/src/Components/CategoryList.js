import React from "react";
import {
  getCategoriesQuery,
  deleteCategoryQuery,
  addKeyWordToCategoryQuery,
  deleteKeywordQuery
} from "../queries/queries";
import { graphql, compose } from "react-apollo";
import { AddKeyword } from "./AddKeyword";
import { DeleteCategory } from "./DeleteCategory";
import { DeleteKeyword } from "./DeleteKeyword";

const CategoriesList = props => {
  let {
    deleteKeyword,
    addKeyWordToCategory,
    deleteCategory,
    getCategories: { loading, error, categories }
  } = props;

  const displayCategories = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>{"Categories"}</h4>
          </div>
          <div className="col-lg-8">
            <h4>{"Keywords"}</h4>
          </div>
        </div>
        {categories.map((category, index) => (
          <div className="row" key={index}>
            <div className="col-lg-4">
              <span className="spacing">{category.name}</span>

              <DeleteCategory
                category={category}
                deleteCategory={deleteCategory}
                getCategoriesQuery={getCategoriesQuery}
              />
            </div>
            <div className="col-lg-8">
              {category.keywords &&
                category.keywords.map(keyword => (
                  <span className="spacing">
                    {keyword + " "}

                    <DeleteKeyword
                      category={category}
                      keyword={keyword}
                      deleteKeyword={deleteKeyword}
                      getCategoriesQuery={getCategoriesQuery}
                    />
                  </span>
                ))}
              <AddKeyword
                category={category}
                addKeyWordToCategory={addKeyWordToCategory}
                getCategoriesQuery={getCategoriesQuery}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return displayCategories();
};

export default compose(
  graphql(getCategoriesQuery, { name: "getCategories" }),
  graphql(deleteCategoryQuery, { name: "deleteCategory" }),
  graphql(addKeyWordToCategoryQuery, { name: "addKeyWordToCategory" }),
  graphql(deleteKeywordQuery, { name: "deleteKeyword" })
)(CategoriesList);

// export default graphql(getCategoriesQuery)(CategoriesList);
