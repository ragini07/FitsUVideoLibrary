import { initialFilterState } from "../Utils";
import { ACTION_TYPE } from "../Utils/constants";

export const filterReducerFtn = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CATEGORY:
      return { ...state, category: action.payload };
    case ACTION_TYPE.FILTER_BY_SEARCH:
      return { ...state, searchQuery: action.payload };
    case ACTION_TYPE.SORT_BY:
      return { ...state, sortBy: action.payload };
    case ACTION_TYPE.CLEAR_FILTER:
      return initialFilterState;
    default:
      return state;
  }
};
