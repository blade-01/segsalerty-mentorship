<template>
  <div class="grid grid-cols-2 md:grid-cols-6 pt-10 bg-secBg">
    <div v-for="(image, index) in images" :key="index">
      <img :src="require(`@/assets/img/${image}`)" :alt="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeGallery",
  data() {
    return {
      images: [
        "gal-01.svg",
        "gal-02.svg",
        "gal-03.svg",
        "gal-04.svg",
        "gal-05.svg",
        "gal-06.svg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
