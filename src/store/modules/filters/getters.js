import {
  FILTERS_GETTER_TOGGLE_FILTER_VIEW,
  FILTERS_GETTER_PROVIDERS,
  FILTERS_GETTER_GENRES
} from "./types";

export default {
  [FILTERS_GETTER_TOGGLE_FILTER_VIEW](state) {
    return state.isFilterViewActive;
  },
  [FILTERS_GETTER_PROVIDERS](state) {
    return state.providers;
  },
  [FILTERS_GETTER_GENRES](state) {
    return state.genres;
  }
};
