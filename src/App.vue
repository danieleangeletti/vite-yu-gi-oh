<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {},
  mounted() {
    axios.get(this.store.base_url).then((response) => {
      this.store.cards = response.data.data;
      console.log(this.store.cards);
    });
    axios.get(this.store.archetypes_base_url).then((response) => {
      this.store.archetypes = response.data;
      console.log(this.store.archetypes);
    });
  },
};
</script>

<template>
  <AppHeader />

  <AppMain />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
