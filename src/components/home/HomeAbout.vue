<template>
  <div class="flex py-16 bg-secBg">
    <div class="container">
      <div class="flex justify-between items-center flex-col md:flex-row gap-4">
        <div class="illus mb-8 md:mb-0 md:max-w-lg">
          <figure>
            <img src="@/assets/img/illus-02.svg" alt="illustration_02" />
          </figure>
        </div>
        <div>
          <p class="tag">Gabriel Pires</p>
          <h5
            class="my-6 font-bold text-5xl leading-snug text-priText lg:max-w-sm mx-0"
          >
            Professional Web Designer
          </h5>
          <p class="text-priText text-xl mb-3">Provides a full service range</p>
          <p class="max-w-md leading-8 text-secText">
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </p>
          <button
            class="bg-white font-bold text-priText text-sm uppercase px-5 py-3 rounded-md mt-8 shadow-md"
          >
            About Me
          </button>
        </div>
      </div>
      <div class="my-12 grid grid-cols-1 md:grid-cols-2 mt-28">
        <div
          class="border border-solid border-border p-8"
          v-for="(about, index) in abouts"
          :key="index"
        >
          <div class="flex justify-start items-center space-x-6">
            <div class="bg-secondary rounded-full p-4">
              <figure>
                <img
                  :src="require(`@/assets/img/${about.img}`)"
                  :alt="about.title"
                  class="h-8 w-8"
                />
              </figure>
            </div>
            <div>
              <h6 class="font-bold text-4xl text-priText mb-2">
                {{ about.title }}
              </h6>
              <p class="text-priText text-xl">{{ about.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAbout",
  data() {
    return {
      abouts: [
        {
          img: "service-calender.svg",
          title: "42%",
          content: "Years of experience",
        },
        {
          img: "service-development.svg",
          title: "73+",
          content: "Projects Done",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
