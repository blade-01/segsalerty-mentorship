<template>
  <div class="pt-16 bg-secBg">
    <div class="container">
      <div class="flex justify-center">
        <img src="@/assets/img/about.svg" alt="about_image" />
      </div>
      <div class="mt-8 md:max-w-xl m-auto">
        <p class="tag">Gabriel Pires</p>
        <h2
          class="my-6 font-bold text-5xl leading-snug text-priText lg:max-w-md mx-0"
        >
          Professional Web Designer
        </h2>
        <p class="leading-8 text-secText">
          Ability to put themselves in the merchant's shoes. It is meant to
          partner on the long run, and work as an extension of the merchant's
          team.
          <br /><br />
          A digital agency is a business you hire to outsource your digital
          marketing efforts, instead of handling in-house. They can provide your
          business with a variety of digital solutions to promote your product
          or service online and help you.
        </p>
      </div>
      <div class="my-12 grid grid-cols-1 md:grid-cols-2">
        <div
          class="border border-solid border-border p-8 sm:p-10"
          v-for="(about, index) in abouts"
          :key="index"
        >
          <div class="flex justify-start items-center space-x-6">
            <div
              class="bg-secondary rounded-full p-4 xl:p-0 xl:h-28 xl:w-28 flex justify-center items-center"
            >
              <figure>
                <img
                  :src="require(`@/assets/img/${about.img}`)"
                  :alt="about.title"
                  class="h-10 w-10 xl:h-12 xl:w-12"
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
      <div class="mt-8 md:max-w-xl m-auto">
        <p class="tag">Video Reel</p>
        <h2
          class="my-6 font-bold text-4xl leading-snug text-priText lg:max-w-lg mx-0"
        >
          Unlock The Greatest Value Possible
        </h2>
        <p class="leading-8 text-secText">
          Design, business understanding, ability to put themselves in the
          merchant's shoes meant to partner.
        </p>
        <div class="my-8 vid">
          <img src="@/assets/img/vid-mage.svg" alt="video_image" />
          <p
            class="absolute bottom-3 left-3 time rounded-md text-white w-12 h-8 z-10 flex justify-center items-center m-0 p-0"
          >
            1:45
          </p>
        </div>
        <p class="leading-8 text-secText">
          Ability to put themselves in the merchant's shoes. It is meant to
          partner on the long run, and work as an extension of the merchant's
          team.
          <br /><br />
          A digital agency is a business you hire to outsource your digital
          marketing efforts, instead of handling in-house. They can provide your
          business with a variety of digital solutions to promote your product
          or service online and help you.
        </p>
      </div>

      <hr class="border border-border my-12" />

      <div class="mt-8 md:max-w-xl m-auto founder">
        <p class="tag">Founder Words</p>
        <h2
          class="my-6 font-bold text-4xl leading-snug text-priText lg:max-w-lg mx-0"
        >
          Digital agency is a business you hire to outsource your digital
          marketing efforts
        </h2>
        <p class="leading-8 text-xl">Gabriel Pires</p>
        <p class="text-sm text-secText">Founder</p>
      </div>

      <hr class="border border-border my-12" />

      <div class="text-center mb-28">
        <div
          class="grid grid-cols-2 gap-10 md:flex items-center justify-between"
        >
          <div v-for="(comp, index) in comps" :key="comp.src">
            <img :src="require(`@/assets/img/${comp.src}`)" :alt="index" />
          </div>
        </div>
      </div>
    </div>
    <get-started-card />
  </div>
</template>

<script>
import GetStartedCard from "@/components/reuseables/GetStartedCard.vue";
export default {
  name: "AboutMain",
  components: {
    GetStartedCard,
  },
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
      comps: [
        { src: "abc-01.svg" },
        { src: "abc-02.svg" },
        { src: "abc-03.svg" },
        { src: "abc-04.svg" },
        { src: "abc-05.svg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
