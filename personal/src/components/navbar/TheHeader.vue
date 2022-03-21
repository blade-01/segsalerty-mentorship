<template>
  <header
    class="flex items-center bg-mainBg fixed w-full h-20 top-0 left-0 z-50 shadow-sm"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <a href="/"
          ><img
            src="@/assets/img/logo.png"
            alt="logo"
            class="w-28 h-20 object-contain"
        /></a>
        <nav
          class="fixed h-full w-full top-0 -left-full mt-16 bg-mainBg py-8 lg:relative lg:w-auto lg:left-0 lg:m-0 lg:p-0 lg:bg-inherit transition-all duration-500 capitalize font-normal text-white text-base"
          :class="{ open: show }"
        >
          <ul
            class="block text-center lg:flex lg:space-x-4 lg:m-0 lg:items-center"
          >
            <li class="mb-4 lg:m-0 lg:pr-10 mx-auto mt-10">
              <a href="/about"> about </a>
            </li>
            <li
              class="mb-4 lg:m-0 mx-auto mt-10 lg:pr-10"
              v-for="(route, index) in routes"
              :key="index"
            >
              <a :href="`#${route.path}`">{{ route.name }}</a>
            </li>
            <li class="mt-20 lg:hidden">
              <a href="contact" class="contact_btn px-6 py-4 block w-52 m-auto"
                >contact</a
              >
            </li>
          </ul>
        </nav>
        <a href="contact" class="contact_btn px-5 py-2 hidden lg:flex"
          >contact</a
        >
        <div
          class="toggle lg:hidden transition-all duration-500"
          @click="toggleNav"
          :class="{ change: show }"
        >
          <div class="toggler"></div>
          <div class="toggler"></div>
          <div class="toggler"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      routes: [
        {
          name: "services",
          path: "services",
        },
        {
          name: "pricing",
          path: "pricing",
        },
        {
          name: "blog",
          path: "blog",
        },
      ],
      show: false,
    };
  },
  methods: {
    toggleNav() {
      this.show = !this.show;
    },
  },
  mounted() {
    // Closes navbar on route change
    this.$router.beforeEach(() => {
      this.show = false;
    });
  },
};
</script>

<style lang="scss" scoped></style>
