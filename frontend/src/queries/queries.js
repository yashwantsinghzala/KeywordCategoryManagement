import { gql } from 'apollo-boost';

const getCategoriesQuery = gql`
  query {
    categories{
      id
      name
      keywords        
    }
  }
  `

const addCategoryQuery = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name){
      id
      name         
    }
  }
  `

const addKeyWordToCategoryQuery = gql`
  mutation addKeyWordToCategory($name: String!, $keyword:String!) {
    addKeyWordToCategory(categoryName: $name, keyword:$keyword){
      id
      name         
    }
  }
  `

const deleteCategoryQuery = gql`
  mutation deleteCategory($name: String!) {
    deleteCategory(name: $name){
      id
      name         
    }
  }
  `

const deleteKeywordQuery = gql`
mutation deleteKeyWordFromCatgory($name: String!, $keyword:String!) {
  deleteKeyWordFromCatgory(categoryName: $name, keyword:$keyword){
    id
    name         
  }
}
  `

export {
  addCategoryQuery, getCategoriesQuery, deleteCategoryQuery,
  deleteKeywordQuery, addKeyWordToCategoryQuery
}