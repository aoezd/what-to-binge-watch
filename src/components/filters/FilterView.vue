<template>
  <v-dialog
    v-model="isFilterViewActive"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar flat dense>
        <v-btn icon @click="isFilterViewActive = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Filters</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat @click="isFilterViewActive = false">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>Providers</v-subheader>
        <FilterChips :type="'provider'" :items="providers"/>
      </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>Genres</v-subheader>
        <FilterChips :type="'genres'" :items="genres"/>
      </v-list>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  FILTERS_ACTION_FETCH,
  FILTERS_GETTER_TOGGLE_FILTER_VIEW,
  FILTERS_MUTATION_TOGGLE_FILTER_VIEW,
  FILTERS_GETTER_PROVIDERS,
  FILTERS_MUTATION_PROVIDERS,
  FILTERS_GETTER_GENRES,
  FILTERS_MUTATION_GENRES
} from "@/store/modules/filters/types";

export default {
  name: "FilterView",
  components: {
    FilterChips: () => import("./FilterChips")
  },
  computed: {
    ...mapGetters([
      FILTERS_GETTER_TOGGLE_FILTER_VIEW,
      FILTERS_GETTER_PROVIDERS,
      FILTERS_GETTER_GENRES
    ]),
    isFilterViewActive: {
      get() {
        return this[FILTERS_GETTER_TOGGLE_FILTER_VIEW];
      },
      set(value) {
        this[FILTERS_MUTATION_TOGGLE_FILTER_VIEW](value);
      }
    },
    providers: {
      get() {
        return this[FILTERS_GETTER_PROVIDERS];
      },
      set(value) {
        this[FILTERS_MUTATION_PROVIDERS](value);
      }
    },
    genres: {
      get() {
        return this[FILTERS_GETTER_GENRES];
      },
      set(value) {
        this[FILTERS_MUTATION_GENRES](value);
      }
    }
  },
  methods: {
    ...mapActions([FILTERS_ACTION_FETCH]),
    ...mapMutations([
      FILTERS_MUTATION_TOGGLE_FILTER_VIEW,
      FILTERS_MUTATION_PROVIDERS,
      FILTERS_MUTATION_GENRES
    ])
  },
  created() {
    this[FILTERS_ACTION_FETCH]();
  }
};
</script>
<style>
</style>
