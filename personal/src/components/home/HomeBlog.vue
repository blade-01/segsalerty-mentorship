<template>
  <div class="bg-secBg py-16 text-priText" id="blog">
    <div class="container">
      <div class="md:flex justify-between items-end mb-4">
        <div>
          <p class="tag">Our Blog</p>
          <p
            class="text-5xl leading-snug font-extrabold md:max-w-md lg:text-5xl pt-4 mb-4 md:mb-0"
          >
            Latest Blog Articles
          </p>
        </div>
        <button
          class="bg-white font-bold text-priText text-sm uppercase px-5 py-3 rounded-md shadow-md"
        >
          Discover All
        </button>
      </div>
      <div class="blogs grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 mt-10">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="blog"
          :class="`blog-${index + 1}`"
        >
          <img
            :src="require(`@/assets/img/${blog.src}`)"
            :alt="blog.title"
            class="my-4 md:h-40"
          />
          <p class="text-xl">{{ blog.category }}</p>
          <p class="font-bold text-2xl my-4 lg:w-72">{{ blog.title }}</p>
          <p class="text-secText">{{ blog.date }}</p>
        </div>
      </div>

      <hr class="border border-border my-12" />

      <div class="md:flex justify-between items-center">
        <div class="text">
          <p class="font-bold text-2xl my-4">Newsletter</p>
          <p class="text-secText">
            A digital agency is a business you hire to outsource
          </p>
        </div>
        <form
          @submit.prevent
          class="mt-8 md:flex justify-between items-center md:space-x-4"
        >
          <input
            type="email"
            placeholder="Your email"
            class="input-style mb-4 md:mb-0 md:w-5/6"
            required
          />
          <button
            type="submit
          "
            class="bg-white font-bold text-priText text-sm uppercase px-5 py-3 rounded-md w-full md:w-1/3 shadow-md text-center"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBlog",
  data() {
    return {
      blogs: [
        {
          src: "blog-01.svg",
          category: "Stories",
          title: "Agency is a business you hire to outsource",
          date: "5 Nov, 2021",
        },
        {
          src: "blog-02.svg",
          category: "Design",
          title: "Outsource your digital marketing efforts",
          date: "29 Oct, 2021",
        },
        {
          src: "blog-03.svg",
          category: "Marketing",
          title: "Your business with a variety of digital",
          date: "21 Oct, 2021",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
