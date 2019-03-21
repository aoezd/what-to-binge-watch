<template>
  <div class="scrolling-wrapper-flexbox">
    <v-chip
      v-for="item in items"
      :key="`${type}-${item.id}`"
      class="filter-chip"
    >{{item.name.clear}}</v-chip>
  </div>
</template>
<script>
export default {
  name: "FilterChips",
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

  &::-webkit-scrollbar {
    display: none;
  }

  .filter-chip {
    flex: 0 0 auto;
  }
}
</style>
