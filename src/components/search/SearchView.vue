<template>
  <v-dialog
    v-model="isSearchViewActive"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar flat dense>
        <v-btn icon @click="isSearchViewActive = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Search</v-toolbar-title>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import {
  SEARCH_GETTER_TOGGLE_SEARCH_VIEW,
  SEARCH_MUTATION_TOGGLE_SEARCH_VIEW
} from "@/store/modules/search/types";

export default {
  name: "SearchView",
  computed: {
    ...mapGetters([SEARCH_GETTER_TOGGLE_SEARCH_VIEW]),
    isSearchViewActive: {
      get() {
        return this[SEARCH_GETTER_TOGGLE_SEARCH_VIEW];
      },
      set(value) {
        this[SEARCH_MUTATION_TOGGLE_SEARCH_VIEW](value);
      }
    }
  },
  methods: {
    ...mapMutations([SEARCH_MUTATION_TOGGLE_SEARCH_VIEW])
  }
};
</script>

<style>
</style>
