import { SEARCH_GETTER_TOGGLE_SEARCH_VIEW } from "./types";

export default {
  [SEARCH_GETTER_TOGGLE_SEARCH_VIEW](state) {
    return state.isSearchViewActive;
  }
};
