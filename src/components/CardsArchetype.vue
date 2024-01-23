<script>
import { store } from "../store.js";

export default {
  data() {
    return { store };
  },
  methods: {},
};
</script>

<template>
  <div>
    <span>Found {{ store.cards.length }} cards</span>
    <span v-if="store.selected_archetype != ''"
      >: each of which of {{ store.selected_archetype }} archetype</span
    >
  </div>
</template>

<style lang="scss" scoped></style>
