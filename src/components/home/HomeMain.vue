<template>
  <div class="home-main flex routes py-8 md:p-0 height bg-mainBg text-white">
    <div class="container">
      <div
        class="flex justify-between items-center flex-col-reverse md:flex-row"
      >
        <div>
          <p class="tag">Gabriel Pires</p>
          <h1 class="my-6 font-bold text-nl lg:text-7xl leading-snug max-w-3xl">
            The Simple, Clean Design
          </h1>
          <p class="max-w-md leading-8">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
          <button
            class="bg-secondary font-bold text-white text-sm uppercase px-4 py-3 border border-solid border-secondary rounded-md mt-8 transition duration-200 hover:bg-white hover:text-secondary hover:border-secondary shadow-md"
          >
            See My Work
          </button>
        </div>
        <div class="illus mb-8 md:mb-0">
          <figure>
            <img src="@/assets/img/illus-01.svg" alt="illustration_01" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMain'
}
</script>

<style lang="scss" scoped></style>
