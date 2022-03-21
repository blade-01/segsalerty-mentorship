<template>
  <div class="py-16 bg-secBg text-priText">
    <div class="container">
      <div
        class="flex justify-between items-center flex-col-reverse md:flex-row"
      >
        <div class="md:w-1/2">
          <p class="tag">Gabriel Pires</p>
          <h1 class="my-6 font-bold text-5xl lg:text-6xl max-w-xl">
            Help To Build Your Dream Project
          </h1>
          <p class="max-w-md leading-8">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
          <button
            class="bg-secondary font-bold text-white text-sm uppercase px-4 py-3 border border-solid border-secondary rounded-md mt-8 transition duration-200 hover:bg-white hover:text-secondary hover:border-secondary shadow-md"
          >
            Contact Me
          </button>
        </div>
        <div class="illus mb-8 md:mb-0 md:w-1/2">
          <figure>
            <img src="@/assets/img/illus-04.svg" alt="illustration_04" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBuild",
};
</script>

<style lang="scss" scoped></style>
