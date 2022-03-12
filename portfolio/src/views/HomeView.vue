<template>
  <div class="home">
    <the-header />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '../components/navbar/TheFooter.vue'
import TheHeader from '../components/navbar/TheHeader.vue'
export default {
  name: 'Home',
  components: { TheHeader, TheFooter }
}
</script>
