<template>
  <div class="bg-white dark:bg-card rounded-lg mt-4 p-5 shadow-md lg:flex">
    <figure>
      <img
        :src="getProfile.avatar_url"
        alt="user_avatar"
        class="rounded-full border-link border-2 dark:border-btn w-32 object-cover hidden lg:block mr-8 basis-1/5"
      />
    </figure>
    <main class="lg:basis-4/5">
      <div class="flex items-center mb-4">
        <figure>
          <img
            :src="getProfile.avatar_url"
            alt="user_avatar"
            class="rounded-full border-link border-2 dark:border-btn w-20 lg:hidden mr-4"
          />
        </figure>
        <div class="lg:flex lg:justify-between lg:items-start lg:w-full">
          <div class="profile-details">
            <p class="title-text">{{ getProfile.name }}</p>
            <a :href="getProfile.html_url" class="text-link dark:text-btn"
              >@{{ getProfile.login }}</a
            >
          </div>
          <p class="">Joined {{ formatDate(getProfile.created_at) }}</p>
        </div>
      </div>
      <div class="bio">
        <p :class="{ nil: !getProfile.bio }">
          {{ getProfile.bio ? getProfile.bio : "This profile has no bio" }}
        </p>
      </div>
      <div
        class="stats bg-light dark:bg-dark mt-6 mb-8 p-5 rounded-lg text-center md:text-left flex justify-between items-center"
      >
        <div class="stat">
          <p class="font-extralight mb-1">Repos</p>
          <p class="title-text">28</p>
        </div>
        <div class="stat">
          <p class="font-extralight mb-1">Followers</p>
          <p class="title-text">32</p>
        </div>
        <div class="stat">
          <p class="font-extralight mb-1">Following</p>
          <p class="title-text">60</p>
        </div>
      </div>
      <div class="icons md:grid md:grid-cols-2">
        <p :class="{ nil: !getProfile.location }" class="mb-8">
          <span class="mr-3 mdi mdi-map-marker"></span
          >{{ responseType(getProfile.location) }}
        </p>
        <p :class="{ nil: !getProfile.blog }" class="mb-8">
          <span class="mr-3 mdi mdi-link-variant"></span>
          <a :href="getProfile.blog" target="_blank">{{
            responseType(getProfile.blog)
          }}</a>
        </p>
        <p :class="{ nil: !getProfile.twitter_username }" class="mb-8">
          <span class="mr-3 mdi mdi-twitter"></span>
          <a
            :href="`https://twitter.com/${getProfile.twitter_username}`"
            target="_blank"
            >{{
              getProfile.twitter_username
                ? `@${getProfile.twitter_username}`
                : "Not available"
            }}</a
          >
        </p>
        <p :class="{ nil: !getProfile.company }" class="mb-8">
          <span class="mr-3 mdi mdi-domain"></span>
          <a href="#" target="_blank">{{ responseType(getProfile.company) }}</a>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "TheBody",
  data() {
    return {
      searchParam: "",
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("D MMM YYYY");
    },
    responseType(response) {
      return response ? response : "Not available";
    },
  },
  computed: {
    ...mapGetters(["getProfile"]),
  },
};
</script>
