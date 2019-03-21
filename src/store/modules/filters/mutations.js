import {
  FILTERS_MUTATION_TOGGLE_FILTER_VIEW,
  FILTERS_MUTATION_PROVIDERS,
  FILTERS_MUTATION_GENRES
} from "./types";

export default {
  [FILTERS_MUTATION_TOGGLE_FILTER_VIEW](state, active) {
    state.isFilterViewActive = active || !state.isFilterViewActive;
  },
  [FILTERS_MUTATION_PROVIDERS](state, providers) {
    state.providers = providers || [];
  },
  [FILTERS_MUTATION_GENRES](state, genres) {
    state.genres = genres || [];
  }
};
