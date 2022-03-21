<template>
  <div class="bg-mainBg text-white py-28">
    <div class="container">
      <div class="flex justify-between items-center flex-col md:flex-row">
        <div class="md:w-1/2">
          <p class="tag">features</p>
          <h3
            class="text-5xl lg:text-6xl font-bold lg:max-w-md leading-snug my-5"
          >
            Give Your Site A New Look
          </h3>
          <p class="text-xl lg:max-w-lg">
            Service range including technical skills, design, business
            understanding.
          </p>
          <ul class="list-none mt-10">
            <li
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-center space-x-4 mb-4"
            >
              <img
                :src="require(`@/assets/img/${feature.icon}`)"
                :alt="feature.title"
                class="w-5 h-5"
              />
              <span class="opacity-80">{{ feature.title }}</span>
            </li>
          </ul>
        </div>
        <div class="illus md:w-1/2 mt-8 md:mt-0">
          <img src="@/assets/img/illus-03.svg" alt="illustration_03" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFeatures",
  data() {
    return {
      features: [
        { icon: "check.svg", title: "Range including technical skills" },
        { icon: "check.svg", title: "Business understanding" },
        { icon: "check.svg", title: "Partner on the long run" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
