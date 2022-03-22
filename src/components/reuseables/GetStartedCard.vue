<template>
  <div class="bg-cardBg py-8">
    <div class="container get-card py-14 lg:py-0">
      <div
        class="flex flex-col justify-between items-center lg:flex-row relative z-30"
      >
        <div class="mb-10 lg:mb-0 xl:w-1/4 2xl:w-1/6">
          <p class="tag">Get Started</p>
          <p class="text-priText text-2xl font-bold my-4">
            I Help Companies Move Faster
          </p>
          <a
            href="/contact"
            class="inline-block bg-secondary font-bold text-white text-sm border border-solid border-transparent uppercase px-5 py-3 rounded-md shadow-md hover:bg-white hover:text-secondary hover:border-secondary transition-all"
          >
            Contact Me
          </a>
        </div>
        <div
          class="flex flex-col justify-between items-center md:flex-row xl:w-4/5 1xl:w-4/6 2xl:w-1/2"
        >
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
