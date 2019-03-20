import { CORE_GETTER_TOGGLE_DRAWER } from "./types";

export default {
  [CORE_GETTER_TOGGLE_DRAWER](state) {
    return state.isDrawerActive;
  }
};
