<template>
  <div id="contact">
    <the-header />
    <contact-banner />
    <contact-main />
    <contact-body />
    <contact-faq />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import ContactBanner from "../components/contact/ContactBanner.vue";
import ContactMain from "../components/contact/ContactMain.vue";
import ContactBody from "../components/contact/ContactBody.vue";
import ContactFaq from "../components/contact/ContactFaq.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
export default {
  name: "ContactView",
  components: {
    TheHeader,
    ContactBanner,
    ContactMain,
    ContactBody,
    ContactFaq,
    TheFooter,
  },
};
</script>

, ContactBody
<style lang="scss" scoped></style>
