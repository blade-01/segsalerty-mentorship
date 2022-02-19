<template>
  <div class="flex justify-between items-center text-black dark:text-white">
    <h1 class="text-2xl font-bold">devprofile</h1>
    <div>
      <input
        type="checkbox"
        id="theme-switch"
        class="hidden"
        v-model="lightMode"
        @click="toggleTheme"
      />
      <label for="theme-switch" class="cursor-pointer">
        <span
          v-if="lightMode === true"
          class="flex justify-between items-center"
        >
          <p class="tracking-widest mr-4 font-semibold">DARK</p>
          <span
            class="mdi mdi-moon-waning-crescent text-2xl text-text dark:text-white"
          ></span>
        </span>
        <span v-else class="flex justify-between items-center">
          <p class="tracking-widest mr-4 font-semibold">LIGHT</p>
          <span
            class="mdi mdi-white-balance-sunny text-2xl text-text dark:text-white"
          ></span>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHead",
  data() {
    return {
      lightMode: false,
    };
  },
  methods: {
    toggleTheme() {
      document.documentElement.classList.toggle("dark");
      localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    },
  },
  mounted() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      this.lightMode = false;
    } else {
      document.documentElement.classList.remove("dark");
      this.lightMode = true;
    }
  },
};
</script>
