import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  isFilterViewActive: false,
  providers: [],
  genres: []
};

export default {
  actions: actions,
  getters: getters,
  mutations: mutations,
  state: state
};
