<script>
import SingleCard from "./SingleCard.vue";
import { store } from "../store.js";

export default {
  data() {
    return { store };
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
    <div class="container">ALIEN</div>
    <div class="container bg-white">
      <div class="bg-dark text-white">Found x cards</div>
      <div class="row">
        <div class="col-3" v-for="(card, i) in store.cards" :key="i">
          <SingleCard :card="card" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #d48f38;
}
.img-container {
  width: 200px;
  height: 280px;
}
</style>
