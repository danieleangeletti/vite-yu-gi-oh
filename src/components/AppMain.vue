<script>
import SingleCard from "./SingleCard.vue";
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    SingleCard,
  },
  methods: {},
  props: {},
};
</script>

<template>
  <main>
    <div class="container pt-4 pb-4">
      <select class="form-select" aria-label="Default select example">
        <option selected value="">Select Archetype</option>
        <!-- Le options della select vengono fatte con un v-for sull'array di oggetti -->
        <!-- L'array di oggetti viene popolato tramite la chiamata API ad archetype -->
        <option
          v-for="(archetype, i) in store.archetypes"
          :value="archetype.archetype_name"
        >
          {{ archetype.archetype_name }}
        </option>
      </select>
    </div>
    <div class="container bg-white pt-3">
      <div class="bg-dark text-white pt-2 pb-2">
        Found {{ store.cards.length }} cards
      </div>
      <div class="row">
        <div class="col-2" v-for="(card, i) in store.cards" :key="i">
          <SingleCard :card="card" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #d48f38;
  .form-select {
    width: 30%;
  }
}
</style>
