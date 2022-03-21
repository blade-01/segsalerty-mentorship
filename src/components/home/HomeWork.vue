<template>
  <div class="bg-mainBg text-white py-16" id="work">
    <div class="container">
      <div class="md:flex justify-between items-end">
        <div>
          <p class="tag mb-4">portfolio</p>
          <h4 class="capitalize text-4xl lg:text-5xl font-bold">latest work</h4>
        </div>
        <button
          class="border border-white rounded-md bg-transparent transition ease-in-out duration-200 hover:bg-white hover:text-priText px-4 py-2 uppercase font-bold mt-4 md:mt-0"
        >
          Explore More
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
        <div
          class="card-height relative"
          :class="work.src"
          v-for="(work, index) in works"
          :key="index"
        >
          <div class="absolute bottom-6 left-align">
            <p
              class="bg-white text-priText rounded-3xl inline-block py-2 px-3 mb-4"
            >
              {{ work.tag }}
            </p>
            <h4 class="font-bold text-4xl">{{ work.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWork",
  data() {
    return {
      works: [
        { src: "work-01", tag: "Design", title: "SOFA" },
        { src: "work-02", tag: "Branding", title: "KeyBoard" },
        { src: "work-03", tag: "Illustration", title: "Work Media" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
