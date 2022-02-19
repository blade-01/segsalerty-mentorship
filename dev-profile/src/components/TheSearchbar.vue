<template>
  <small :class="{ err: errorMssg }" v-if="errorMssg">{{ errorMssg }}</small>
  <form
    class="bg-white dark:bg-card flex justify-between items-center rounded-lg relative my-4 mx-1 p-2 shadow-md"
    @submit.prevent="fetchUserDetails"
  >
    <span
      class="mdi mdi-magnify text-2xl text-link dark:text-linkDark absolute left-3 top-1/2 transform -translate-y-1/2"
    ></span>
    <input
      v-model="searchParam"
      type="text"
      placeholder="Search for GitHub username..."
      class="input-style"
    />
    <input
      type="submit"
      value="Search"
      class="text-white bg-btn rounded-lg px-4 py-3 text-sm ml-1 basis-1/4 md:basis-1/6 font-bold md:tracking-widest cursor-pointer"
    />
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheSearchbar",
  data() {
    return {
      searchParam: "",
    };
  },
  methods: {
    ...mapActions(["fetchProfile"]),
    fetchUserDetails() {
      this.fetchProfile(this.searchParam);
      this.searchParam = "";
    },
  },
  computed: {
    ...mapGetters(["errorMssg"]),
  },
  mounted() {
    this.searchParam = "blade-01";
    this.fetchUserDetails();
  },
};
</script>
