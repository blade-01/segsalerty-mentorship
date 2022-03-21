<template>
  <div
    class="bg-map bg-no-repeat bg-center bg-cover py-16 text-priText relative"
  >
    <div class="container">
      <div class="md:flex justify-between items-center space-x-5">
        <form
          @submit.prevent
          class="bg-white p-6 rounded-md md:w-1/2 mb-72 md:mb-0"
        >
          <p class="mb-6 text-2xl font-bold">Get In Touch</p>
          <div class="mb-6">
            <input
              type="email"
              placeholder="Your email"
              class="input-style w-full placeholder-secText"
              required
            />
          </div>
          <div class="mb-6">
            <select
              type="email"
              placeholder="Your email"
              class="input-style w-full placeholder-secText"
              required
            >
              <option
                :value="option"
                v-for="(option, index) in options"
                :key="index"
                class="text-secText"
              >
                {{ option }}
              </option>
            </select>
          </div>
          <div class="mb-6">
            <textarea
              placeholder="Message"
              class="input-style w-full placeholder-secText"
              required
              rows="5"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-secondary font-bold text-white text-sm uppercase px-4 py-3 border border-solid border-secondary rounded-md transition duration-200 hover:bg-white hover:text-secondary hover:border-secondary shadow-md"
            >
              Submit Now
            </button>
          </div>
        </form>
        <div class="absolute bottom-40 md:bottom-1/2 right-1/2 md:right-60">
          <div
            class="mdi mdi-map-marker-star text-3xl px-2 py-1 rounded-full bg-secondary text-white"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMain",
  data() {
    return {
      options: ["Subject", "Service Issue", "Appreciation"],
      contacts: [
        {
          src: "c-address.svg",
          link: "2247 Lunetta Street, TX 76301",
        },
        {
          src: "c-phone.svg",
          link: "+1 (234) 567-89-00",
        },
        {
          src: "c-mail.svg",
          link: "info@agency.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
