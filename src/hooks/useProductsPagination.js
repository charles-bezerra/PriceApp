import React from "react";

//constants
import { initialPagination } from "../constants";

//services
import { listProduct } from "../controllers/product.controller";

//reducers
import paginationReducer from "../store/reducers/paginationReducer";
import productsReducer from "../store/reducers/productsReducer";

//types actions
import { PaginationActionTypes, ProductsActionTypes } from "../store/types";

const useProductsPagination = () => {
  const [products, productsDispatch] = React.useReducer(productsReducer, []);
  
  const [pagination, paginationDispatch] = React.useReducer(
    paginationReducer,
    initialPagination
  );

  const onScroll = React.useCallback(() => {
    return new Promise((resolve, reject) => {
      listProduct(pagination.minIndex, pagination.maxIndex)
        .then((response) => {
          productsDispatch({
            type:
              pagination.minIndex == 0
                ? ProductsActionTypes.SET
                : ProductsActionTypes.ADD,

            payload: { products: response },
          });

          if (response.length < pagination.maxIndex + 1) {
            paginationDispatch({type: PaginationActionTypes.INCREMENT});
          }

          resolve({});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }, [pagination, listProduct, productsDispatch]);

  React.useEffect(() => {
    return () => {
      productsDispatch({ type: ProductsActionTypes.RESET });
      paginationDispatch({ type: PaginationActionTypes.RESET });
    };
  }, [productsDispatch, paginationDispatch]);

  return [products, onScroll];
}

export default useProductsPagination;
