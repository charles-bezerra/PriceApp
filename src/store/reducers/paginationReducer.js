import paginationObserver from "../observers/paginationObserver";

export default function paginationReducer(pagination, action) {
    const behavior = paginationObserver[action.type];
    return behavior(pagination, action);
}