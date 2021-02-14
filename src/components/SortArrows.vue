<template>
  <span v-if="currentSortDir === 'asc'"> ▲</span>
  <span v-else> ▼</span>
</template>

<script>
export default {
  name: "SortArrows",
  props: {
    currentSortDir: String,
  },
};
</script>
