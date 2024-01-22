<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: {
    cards_list: Object,
  },
};
</script>

<template>
  <main>
    <div class="container">ALIEN</div>
    <div class="container bg-white">
      <div class="bg-dark text-white">Found x cards</div>
      <div class="row">
        <div class="col-3" v-for="(card, i) in cards_list" :key="i">
          <div class="single_card">
            <div class="img-container">
              <img
                class="w-100 h-100"
                :src="card.card_images[0].image_url"
                :alt="card.name"
              />
            </div>
            <div>
              <h5>{{ card.name }}</h5>
              <h5>{{ card.archetype }}</h5>
            </div>
          </div>
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
