<script>
import SingleCard from "./SingleCard.vue";
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return {
      store,
      selected_archetype: "0",
    };
  },
  components: {
    SingleCard,
  },
  methods: {
    get_data_from_archetypes() {
      let myUrl = this.store.base_url;
      if (this.selected_archetype != "0") {
        myUrl += "?archetype=" + this.selected_archetype;
      }
      axios.get(myUrl).then((response) => {
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
        v-model="selected_archetype"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="0">Select Archetype</option>
        <option
          v-for="(archetype, i) in store.archetypes"
          :value="archetype.archetype_name"
        >
          {{ archetype.archetype_name }}
        </option>
      </select>
      <button
        @click="get_data_from_archetypes"
        type="button"
        class="btn btn-primary ms-4"
      >
        GENERATE CARDS
      </button>
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
