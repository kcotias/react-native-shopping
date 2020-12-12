import { gql } from '@apollo/client';

export const CATEGORY_QUERY = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        images {
          url
        }
        productVariants {
          price
        }
      }
    }
  }
`;
