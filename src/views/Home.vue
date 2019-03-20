<template>
  <FilterBar :type="'Genre'" :items="random"/>
</template>
<script>
export default {
  name: "Home",
  components: {
    FilterBar: () => import("@/components/FilterBar")
  },
  data() {
    return {
      random: [
        "acres",
        "finally",
        "favorite",
        "quarter",
        "rest",
        "printed",
        "fat",
        "ruler",
        "air",
        "rule",
        "twenty",
        "environment",
        "center",
        "pleasure",
        "zero",
        "wire",
        "cause",
        "deeply",
        "most",
        "snake"
      ]
    };
  }
};
</script>
