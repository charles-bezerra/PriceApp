import { notFountKeyUtil } from "../../util";

let paginationObserver = {};

paginationObserver.INCREMENT = (pagination, _) => {
  return {
    minIndex: pagination.minIndex + 10,
    maxIndex: pagination.maxIndex + 10
  }
}

paginationObserver.RESET = () => {
  return {
    minIndex: 0,
    maxIndex: 9
  }
}

paginationObserver.SET = (_, action) => {
  notFountKeyUtil(action.payload, "minIndex");
  notFountKeyUtil(action.payload, "maxIndex");
  return {
    minIndex: action.payload.minIndex,
    maxIndex: action.payload.maxIndex,
  }
}

export default paginationObserver;