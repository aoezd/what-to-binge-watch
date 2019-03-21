<template>
  <div>
    <v-tabs grow>
      <v-tab ripple>New</v-tab>
      <v-tab ripple>Popular</v-tab>
      <v-tabs-items>
        <v-tab-item>
          <NewTitlesView/>
        </v-tab-item>
        <v-tab-item>
          <PopularTitlesView/>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {
    NewTitlesView: () => import("@/views/NewTitlesView"),
    PopularTitlesView: () => import("@/views/PopularTitlesView")
  }
};
</script>
