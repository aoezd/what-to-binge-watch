<template>
  <div class="scrolling-wrapper-flexbox">
    <v-chip
      v-for="attribute in items"
      :key="`${type}-${attribute}`"
      class="filter-chip"
      color="primary"
      text-color="white"
    >{{attribute}}</v-chip>
  </div>
</template>
<script>
export default {
  name: "FilterBar",
  props: {
    type: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style scoped lang="scss">
.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  .filter-chip {
    flex: 0 0 auto;
  }
}
</style>
