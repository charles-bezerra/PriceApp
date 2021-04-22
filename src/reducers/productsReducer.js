export default function productsReducer(products, action) {
  let newProducts = products;

  switch (action.type) {
    case 'ADD':
      newProducts.push(...action.payload.products);
      break;

    case 'SET':
      newProducts = action.payload.products;
      break;

    case 'RESET':
      newProducts = [];
      break;

    case 'DELETE':
      newProducts = products.filter((product) => product === action.payload.barcode) 
      break;

    default:
      throw new Error();
  }

  return newProducts;
}
