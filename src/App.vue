<script setup>
import TheHead from "./components/TheHead.vue";
import TheSearchbar from "./components/TheSearchbar.vue";
import TheBody from "./components/TheBody.vue";
</script>

<template>
  <div
    class="py-10 h-screen w-screen flex justify-center items-center overflow-y-auto"
  >
    <div class="container">
      <the-head />
      <the-searchbar />
      <the-body />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}
</style>
