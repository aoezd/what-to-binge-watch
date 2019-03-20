<template>
  <v-toolbar app flat dense>
    <v-toolbar-side-icon @click="toggleDrawer"/>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
import { mapMutations } from "vuex";
import { CORE_MUTATION_TOGGLE_DRAWER } from "@/store/modules/core/types";

export default {
  name: "Toolbar",
  methods: {
    ...mapMutations([CORE_MUTATION_TOGGLE_DRAWER]),
    toggleDrawer() {
      this[CORE_MUTATION_TOGGLE_DRAWER]();
    }
  }
};
</script>
