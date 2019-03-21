import { SEARCH_MUTATION_TOGGLE_SEARCH_VIEW } from "./types";

export default {
  [SEARCH_MUTATION_TOGGLE_SEARCH_VIEW](state, active) {
    state.isSearchViewActive = active || !state.isSearchViewActive;
  }
};
