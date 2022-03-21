<template>
  <div id="contact">
    <the-header />
    <contact-banner />
    <contact-main />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
import ContactBanner from "../components/contact/ContactBanner.vue";
import ContactMain from "../components/contact/ContactMain.vue";
export default {
  name: "ContactView",
  components: {
    TheHeader,
    TheFooter,
    ContactBanner,
    ContactMain,
  },
};
</script>

<style lang="scss" scoped></style>
