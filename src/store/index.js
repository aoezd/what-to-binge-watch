import Vue from "vue";
import Vuex from "vuex";
import core from "./modules/core/index";
import filters from "./modules/filters/index";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    core,
    filters
  }
});
