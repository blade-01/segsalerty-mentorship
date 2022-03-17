<template>
  <div class="bg-cardBg py-16">
    <div class="container">
      <div class="flex flex-col justify-between items-center md:flex-row">
        <div class="mb-10 md:mb-0">
          <p class="tag">Get Started</p>
          <p class="text-priText text-2xl font-bold my-4">
            I Help Companies Move Faster
          </p>
          <button
            class="bg-secondary font-bold text-white text-sm border border-solid border-transparent uppercase px-5 py-3 rounded-md shadow-md hover:bg-white hover:text-secondary hover:border-secondary transition-all"
          >
            Contact Me
          </button>
        </div>
        <div class="flex flex-col justify-between items-center md:flex-row">
          <p class="text-secText">
            Put themselves in the merchant's shoes. It is meant to partner on
            the long run.
          </p>
          <img
            src="@/assets/img/block.svg"
            alt="block"
            class="block-card mt-8 md:mt-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStartedCard",
};
</script>

<style lang="scss" scoped></style>
