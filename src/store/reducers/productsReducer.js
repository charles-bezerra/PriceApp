import productObserver from "../observers/productsObserver";

export default function productsReducer(products, action) {
  const behavior = productObserver[action.type];
  return behavior(products, action);
}
