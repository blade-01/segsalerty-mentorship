<template>
  <div id="about">
    <the-header />
    <about-banner />
    <about-main />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
import AboutBanner from "../components/about/AboutBanner.vue";
import AboutMain from "../components/about/AboutMain.vue";
export default {
  name: "AboutView",
  components: {
    TheHeader,
    TheFooter,
    AboutBanner,
    AboutMain,
  },
};
</script>

<style lang="scss" scoped></style>
