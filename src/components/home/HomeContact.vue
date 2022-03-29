<template>
  <div class="bg-mainBg py-16 text-priText">
    <div class="container">
      <div class="md:flex justify-between items-center space-x-5">
        <form
          @submit.prevent
          class="bg-white p-8 rounded-md md:w-1/2 xl:max-w-md xl:p-12"
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
        <div class="text-white mt-8 md:mt-0 md:w-1/2 lg:max-w-md">
          <p class="tag">Contact</p>
          <p
            class="text-5xl leading-snug font-extrabold md:max-w-md lg:text-5xl py-4 mb-4 md:mb-0"
          >
            Contact Me
          </p>
          <p class="text-lightWhite">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
          <ul class="mt-8">
            <li
              v-for="(contact, index) in contacts"
              :key="index"
              class="flex items-center space-x-4 mb-3"
            >
              <img
                :src="require(`@/assets/img/${contact.src}`)"
                :alt="contact.link"
                class="p-3 bg-secondary rounded-full h-10 w-10"
              />
              <span>{{ contact.link }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContact",
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
