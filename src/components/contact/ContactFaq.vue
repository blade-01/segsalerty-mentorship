<template>
  <div class="faq bg-cardBg text-priText py-16" id="pricing">
    <div class="container">
      <div class="md:flex justify-between items-start md:space-x-10">
        <div class="mb-8 md:mb-0 md:max-w-md">
          <p class="tag">faq</p>
          <p
            class="text-5xl leading-snug font-extrabold py-4 md:max-w-md lg:text-4xl lg:leading-snug"
          >
            Frequently Asked Questions
          </p>
          <p class="text-secText mb-4">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
          <p>Contact Me</p>
        </div>
        <div class="max-w-xl">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="border border-solid border-border"
            :class="faq.id === selectedId ? 'bg-white' : ''"
          >
            <div
              class="flex justify-between items-center p-10 cursor-pointer"
              @click="selected(faq.id)"
              :class="faq.id === selectedId ? 'text-priText' : ''"
            >
              <p class="font-bold text-2xl w-56 md:w-full">
                {{ faq.question }}
              </p>
              <img
                src="@/assets/img/down.svg"
                alt="chevron"
                :class="
                  faq.id === selectedId
                    ? 'transition-all ease-in-out duration-200 transform rotate-180'
                    : ''
                "
              />
            </div>
            <div
              class="h-0 overflow-hidden bg-white px-10"
              :class="
                faq.id === selectedId
                  ? 'h-64 lg:h-28 transition-all ease-in-out duration-200'
                  : ''
              "
            >
              <p class="text-secText">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFaq",
  data() {
    return {
      selectedId: 1,
      faqs: [
        {
          id: 1,
          question: "A digital agency is a business",
          answer:
            "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
        },
        {
          id: 2,
          question: "Hire to outsource your digital",
          answer:
            "They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
        },
        {
          id: 3,
          question: "Marketing efforts",
          answer: "Digital marketing efforts, instead of handling in-house.",
        },
        {
          id: 4,
          question: "Can provide your business",
          answer:
            "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
        },
      ],
      comps: [
        { src: "comp-01.svg" },
        { src: "comp-02.svg" },
        { src: "comp-03.svg" },
        { src: "comp-04.svg" },
        { src: "comp-05.svg" },
      ],
    };
  },
  methods: {
    selected(id) {
      this.selectedId = id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
