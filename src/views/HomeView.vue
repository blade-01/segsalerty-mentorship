<template>
  <div class="home">
    <the-header />
    <home-main />
    <home-service />
    <home-work />
    <home-about />
    <home-features />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '../components/navbar/TheFooter.vue'
import HomeMain from '../components/home/HomeMain.vue'
import HomeService from '../components/home/HomeService.vue'
import HomeWork from '../components/home/HomeWork.vue'
import HomeAbout from '../components/home/HomeAbout.vue'
import HomeFeatures from '../components/home/HomeFeatures.vue'
import TheHeader from '../components/navbar/TheHeader.vue'
export default {
  name: 'Home',
  components: {
    TheHeader,
    HomeMain,
    HomeService,
    HomeWork,
    HomeAbout,
    HomeFeatures,
    TheFooter
  }
}
</script>
