<template>
  <div>
    <FilterView/>
    <SearchView/>
    <v-toolbar flat dense>
      <v-toolbar-side-icon @click="toggleDrawer"/>
      <v-toolbar-title>What to binge watch</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleSearchView">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon @click="toggleFilterView">
        <v-icon>filter_list</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { CORE_MUTATION_TOGGLE_DRAWER } from "@/store/modules/core/types";
import { FILTERS_MUTATION_TOGGLE_FILTER_VIEW } from "@/store/modules/filters/types";
import { SEARCH_MUTATION_TOGGLE_SEARCH_VIEW } from "@/store/modules/search/types";

export default {
  name: "Toolbar",
  components: {
    FilterView: () => import("@/components/filters/FilterView"),
    SearchView: () => import("@/components/search/SearchView")
  },
  methods: {
    ...mapMutations([
      CORE_MUTATION_TOGGLE_DRAWER,
      FILTERS_MUTATION_TOGGLE_FILTER_VIEW,
      SEARCH_MUTATION_TOGGLE_SEARCH_VIEW
    ]),
    toggleDrawer() {
      this[CORE_MUTATION_TOGGLE_DRAWER]();
    },
    toggleFilterView() {
      this[FILTERS_MUTATION_TOGGLE_FILTER_VIEW]();
    },
    toggleSearchView() {
      this[SEARCH_MUTATION_TOGGLE_SEARCH_VIEW]();
    }
  }
};
</script>
