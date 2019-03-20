<template>
  <v-app>
    <Toolbar/>
    <Drawer/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Drawer: () => import("@/components/core/Drawer"),
    Toolbar: () => import("@/components/core/Toolbar")
  },
  data() {
    return {
      //
    };
  }
};
</script>
