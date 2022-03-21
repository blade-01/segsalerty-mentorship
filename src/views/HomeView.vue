<template>
  <div id="home">
    <the-header />
    <home-main />
    <home-service />
    <home-work />
    <home-about />
    <home-features />
    <get-started-card />
    <home-testimonials />
    <home-faq />
    <home-blog />
    <home-contact />
    <home-build />
    <home-gallery />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "../components/navbar/TheHeader.vue";
import HomeMain from "../components/home/HomeMain.vue";
import HomeService from "../components/home/HomeService.vue";
import HomeWork from "../components/home/HomeWork.vue";
import HomeAbout from "../components/home/HomeAbout.vue";
import HomeFeatures from "../components/home/HomeFeatures.vue";
import GetStartedCard from "../components/reuseables/GetStartedCard.vue";
import HomeTestimonials from "../components/home/HomeTestimonials.vue";
import HomeFaq from "../components/home/HomeFaq.vue";
import HomeBlog from "../components/home/HomeBlog.vue";
import HomeContact from "../components/home/HomeContact.vue";
import HomeBuild from "../components/home/HomeBuild.vue";
import HomeGallery from "../components/home/HomeGallery.vue";
import TheFooter from "../components/navbar/TheFooter.vue";
export default {
  name: "Home",
  components: {
    TheHeader,
    HomeMain,
    HomeService,
    HomeWork,
    HomeAbout,
    HomeFeatures,
    GetStartedCard,
    HomeTestimonials,
    HomeFaq,
    HomeBlog,
    HomeContact,
    HomeBuild,
    HomeGallery,
    TheFooter,
  },
};
</script>
