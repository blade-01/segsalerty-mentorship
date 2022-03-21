<template>
  <div class="testimonials py-16 text-center bg-secBg">
    <div class="container">
      <p class="tag">Testimonials</p>
      <p
        class="py-4 font-extrabold text-4xl md:max-w-md md:m-auto lg:text-5xl lg:leading-snug text-priText"
      >
        What My Clients Are Saying
      </p>
      <div class="md:flex items-start mt-4">
        <div
          v-for="(testimony, index) in testimonials"
          :key="index"
          class="border border-solid border-border p-4 md:rounded-md md:w-96 text-left"
          :class="[index === 1 ? 'bg-white' : '']"
        >
          <span
            v-for="(i, index) in 5"
            :key="index"
            class="mdi mdi-star text-yellow-400"
          ></span>
          <p class="text-secText py-6 leading-8">{{ testimony.comment }}</p>
          <div class="mt-8 text-priText flex items-center space-x-3">
            <img
              :src="require(`@/assets/img/${testimony.src}`)"
              :alt="testimony.name"
              class="w-20 h-20"
            />
            <div>
              <p class="text-2xl font-bold">{{ testimony.name }}</p>
              <p>{{ testimony.org }}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="bg-white font-bold text-priText text-sm uppercase px-5 py-3 rounded-md mt-8 shadow-md"
      >
        See All
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTestimonials",
  data() {
    return {
      testimonials: [
        {
          comment:
            "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
          src: "avatar-01.svg",
          name: "Graham Griffiths",
          org: "Twitor",
        },
        {
          comment:
            "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions.",
          src: "avatar-02.svg",
          name: "Alan Martí",
          org: "Meta Inc.",
        },
        {
          comment:
            "Provide your business with a variety of digital solutions to promote your product or service online.",
          src: "avatar-03.svg",
          name: "Richardo Kann",
          org: "Photogram",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
