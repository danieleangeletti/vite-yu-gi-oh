<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: { card: Object },
};
</script>

<template>
  <div class="single_card mb-3">
    <div class="img-container">
      <img
        class="w-100"
        :src="card.card_images[0].image_url"
        :alt="card.name"
      />
    </div>
    <div class="main-bg-color h-104 d-flex flex-column align-items-center">
      <h5 class="text-white text-center">{{ card.name.toUpperCase() }}</h5>
      <h5>{{ card.archetype }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-bg-color {
  background-color: #d48f38;
}
.h-104 {
  height: 200px;
}
</style>
