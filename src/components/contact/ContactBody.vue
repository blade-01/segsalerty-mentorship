<template>
  <div class="bg-cardBg text-priText py-16">
    <div class="container">
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3">
        <div
          class="border border-solid border-border p-6"
          v-for="(card, index) in cards"
          :key="index"
        >
          <div class="flex justify-start items-center space-x-6">
            <div class="bg-secondary rounded-full p-3">
              <figure>
                <img
                  :src="require(`@/assets/img/${card.img}`)"
                  :alt="card.title"
                  class="h-4 w-4"
                />
              </figure>
            </div>
            <h3 class="text-secondary">{{ card.title }}</h3>
          </div>
          <p class="mt-5 leading-8 text-xl">{{ card.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactBody",
  data() {
    return {
      cards: [
        {
          img: "c-phone.svg",
          title: "Phone",
          content: "+1 (234) 567-89-00",
        },
        {
          img: "c-mail.svg",
          title: "EMail",
          content: "info@agency.com",
        },
        {
          img: "c-address.svg",
          title: "Address",
          content: "2247 Lunetta Street, TX 76301",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
