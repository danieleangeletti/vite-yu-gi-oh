<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";

export default {
  data() {
    return {
      base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
      cards: [],
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {},
  mounted() {
    axios.get(this.base_url).then((response) => {
      this.cards = response.data.data;
      console.log(this.cards);
    });
  },
};
</script>

<template>
  <AppHeader />

  <AppMain :cards_list="cards" />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
