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
</template>

<style lang="scss" scoped></style>
