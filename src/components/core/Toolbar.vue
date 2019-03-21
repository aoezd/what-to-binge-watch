<template>
  <div>
    <FilterView/>
    <v-toolbar flat dense>
      <v-toolbar-side-icon @click="toggleDrawer"/>
      <v-toolbar-title>What to binge watch</v-toolbar-title>
      <v-spacer></v-spacer>
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

export default {
  name: "Toolbar",
  components: {
    FilterView: () => import("@/components/filters/FilterView")
  },
  methods: {
    ...mapMutations([
      CORE_MUTATION_TOGGLE_DRAWER,
      FILTERS_MUTATION_TOGGLE_FILTER_VIEW
    ]),
    toggleDrawer() {
      this[CORE_MUTATION_TOGGLE_DRAWER]();
    },
    toggleFilterView() {
      this[FILTERS_MUTATION_TOGGLE_FILTER_VIEW]();
    }
  }
};
</script>
