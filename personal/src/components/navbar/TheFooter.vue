<template>
  <footer class="bg-mainBg text-white py-8">
    <div class="container">
      <div
        class="flex justify-center items-center flex-col md:flex-row md:justify-between md:items-start py-8 text-center md:text-left"
      >
        <h3 class="font-bold text-2xl mb-10 md:mb-0">Personal</h3>
        <ul class="mb-10 md:mb-0">
          <li class="text-secondary uppercase mb-8 md:mb-4">menu</li>
          <li
            class="mb-3 capitalize"
            v-for="(menu, index) in menus"
            :key="index"
          >
            <a :href="menu.route">{{ menu.name }}</a>
          </li>
        </ul>
        <ul class="mb-10 md:mb-0">
          <li class="text-secondary uppercase mb-8 md:mb-4">service</li>
          <li
            class="mb-3 capitalize"
            v-for="(service, index) in services"
            :key="index"
          >
            <a :href="service.route">{{ service.name }}</a>
          </li>
        </ul>
        <ul class="flex justify-between items-center space-x-2">
          <li
            class="bg-secondary rounded-full p-2 cursor-pointer border border-solid border-secondary transition duration-200 ease-in-out hover:border-white"
            v-for="(social, index) in socials"
            :key="index"
          >
            <img
              :src="require(`@/assets/img/${social.icon}`)"
              :alt="social.icon"
              class="h-4 w-4"
            />
          </li>
        </ul>
      </div>
      <hr class="border-gray-600 pb-8" />
      <div
        class="flex justify-center items-center flex-col md:flex-row md:justify-between md:items-start text-center md:text-left"
      >
        <p class="text-gray-500 mb-8 md:mb-0">
          Copyright © 2022 Laaqiq. <br class="md:hidden" />
          All Rights Reserved.
        </p>
        <div class="flex justify-between items-center space-x-6">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      menus: [
        {
          name: 'about',
          route: 'about'
        },
        {
          name: 'services',
          route: 'services'
        },
        {
          name: 'blog',
          route: 'blog'
        },
        {
          name: 'contact',
          route: 'contact'
        }
      ],
      services: [
        {
          name: 'design',
          route: 'design'
        },
        {
          name: 'development',
          route: 'development'
        },
        {
          name: 'marketing',
          route: 'marketing'
        },
        {
          name: 'see more',
          route: 'see more'
        }
      ],
      socials: [
        {
          icon: 'contact-facebook.svg'
        },
        {
          icon: 'contact-twitter.svg'
        },
        {
          icon: 'contact-instagram.svg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
