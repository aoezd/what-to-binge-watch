import { CORE_MUTATION_TOGGLE_DRAWER } from "./types";

export default {
  [CORE_MUTATION_TOGGLE_DRAWER](state, active) {
    state.isDrawerActive = active || !state.isDrawerActive;
  }
};
