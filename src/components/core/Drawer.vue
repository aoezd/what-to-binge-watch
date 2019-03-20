<template>
  <v-navigation-drawer v-model="isDrawerActive" absolute temporary>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import {
  CORE_GETTER_TOGGLE_DRAWER,
  CORE_MUTATION_TOGGLE_DRAWER
} from "@/store/modules/core/types";

export default {
  name: "Drawer",
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  },
  computed: {
    ...mapGetters([CORE_GETTER_TOGGLE_DRAWER]),
    isDrawerActive: {
      get() {
        return this[CORE_GETTER_TOGGLE_DRAWER];
      },
      set(value) {
        this[CORE_MUTATION_TOGGLE_DRAWER](value);
      }
    }
  },
  methods: {
    ...mapMutations([CORE_MUTATION_TOGGLE_DRAWER])
  }
};
</script>
