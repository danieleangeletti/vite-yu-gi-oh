<script>
import SingleCard from "./SingleCard.vue";
import { store } from "../store.js";
import axios from "axios";
import CardsArchetype from "./CardsArchetype.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    SingleCard,
    CardsArchetype,
  },
  methods: {
    get_data_from_archetypes() {
      let my_url = this.store.complete_base_url;
      if (store.selected_archetype != "") {
        my_url += "?archetype=" + store.selected_archetype;
      }
      axios.get(my_url).then((response) => {
        this.store.cards = response.data.data;
        console.log(this.store.cards);
      });
    },
  },
  props: {},
};
</script>

<template>
  <main>
    <div class="container pt-4 pb-4 d-flex">
      <select
        @change="get_data_from_archetypes"
        v-model="store.selected_archetype"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">Select Archetype</option>
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
        <CardsArchetype />
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
