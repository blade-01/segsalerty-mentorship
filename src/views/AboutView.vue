<template>
  <div id="about">
    <the-header />
    <page-banner>About Me</page-banner>
    <about-main />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
import PageBanner from "../components/reuseables/PageBanner.vue";
import AboutMain from "../components/about/AboutMain.vue";
export default {
  name: "AboutView",
  components: {
    TheHeader,
    TheFooter,
    PageBanner,
    AboutMain,
  },
};
</script>

<style lang="scss" scoped></style>
