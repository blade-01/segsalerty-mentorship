<template>
  <div class="service bg-secBg py-16">
    <div class="container">
      <div class="text-center md:max-w-md m-auto">
        <p class="tag">Service</p>
        <h2
          class="text-priText text-4xl font-bold lg:text-6xl my-8 leading-snug"
        >
          How I Can Help You With
        </h2>
      </div>
      <div class="my-12 grid grid-cols-1 md:grid-cols-2">
        <div
          class="border border-solid border-border p-6"
          v-for="(card, index) in cards"
          :key="index"
        >
          <div class="flex justify-start items-center space-x-6">
            <div class="bg-secondary rounded-full p-4">
              <figure>
                <img
                  :src="require(`@/assets/img/${card.img}`)"
                  :alt="card.title"
                  class="h-8 w-8"
                />
              </figure>
            </div>
            <h3 class="font-bold text-2xl text-priText">{{ card.title }}</h3>
          </div>
          <p class="text-secText my-5 leading-8">{{ card.content }}</p>
          <div class="flex justify-start items-center space-x-4">
            <small
              class="mdi mdi-plus bg-white shadow-md drop-shadow-md text-secondary py-1.5 px-3 rounded-full text-lg transition duration-200 hover:shadow-lg cursor-pointer"
            ></small>
            <p class="text-priText">Learn More</p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p class="text-secText">
          Want more service? <span class="text-priText">Explore Now</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeService",
  data() {
    return {
      cards: [
        {
          img: "service-design.svg",
          title: "Design",
          content:
            "Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.",
        },
        {
          img: "service-development.svg",
          title: "Development",
          content:
            "Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
