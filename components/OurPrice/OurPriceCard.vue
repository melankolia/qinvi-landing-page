<template>
  <div class="flex flex-col w-[320px]">
    <div
      v-if="props.isBestSeller"
      class="flex flex-col mx-auto bg-secondary px-8 py-1.5 rounded-xl -mb-5 z-10"
    >
      <p class="text-white body-8">BEST SELLER !</p>
    </div>
    <div
      class="flex flex-col rounded-xl bg-brown-10 box-shadow pb-5 pt-8 hover:border hover:border-secondary"
      :class="{ 'mt-5': !props.isBestSeller }"
    >
      <p class="header-7 text-black-30 mb-8 text-center">
        {{ props.package }}
      </p>
      <p v-if="isCustom" class="header-10 text-grey-20 text-center">
        Start From
      </p>
      <div class="flex flex-row justify-center mb-2">
        <p class="text-black-30 header-8 mr-2.5">{{ props.price }}</p>
        <div class="flex flex-col justify-center">
          <p class="text-black-30 header-9">RB</p>
          <p class="header-10 text-grey-20">
            {{ props.perPackage }}
          </p>
        </div>
      </div>
      <div class="flex flex-col mx-auto">
        <div
          v-for="(element, index) in props.features"
          :key="`features-${index}`"
          class="flex flex-row my-2.5 items-center -ml-3"
        >
          <nuxt-img
            v-if="element.icon"
            preload
            format="webp"
            src="assets/images/icons/icon-check.webp"
            alt="Icon Feature Invitation Qinvi"
            height="18"
            width="18"
            class="mr-4"
          />
          <nuxt-img
            v-else
            preload
            format="webp"
            src="assets/images/icons/icon-wrong.webp"
            alt="Icon Feature Invitation Qinvi"
            height="22"
            width="22"
            class="mr-3.5"
          />
          <p class="caption-3 mb-0" v-html="element.description" />
        </div>
      </div>
      <button
        class="bg-brown-20 hover:bg-brown-40 active:bg-brown-50 focus:outline-none focus:ring focus:ring-brown-00 transition-all rounded-full mt-10 mx-6"
        @click="handleContact"
      >
        <p class="text-white caption-3 py-2 px-24">{{ props.buttonText }}</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OurPriceCardProps } from "@/components/OurPrice/interfaces/CardOurPrice";

const props = defineProps<OurPriceCardProps>();

const handleContact = (): void => {
  window.open(
    "https://api.whatsapp.com/send/?phone=6281392608448&text&type=phone_number&app_absent=0"
  );
};

const isCustom = computed(() => props.package?.toLowerCase() === "custom");
</script>

<style scoped></style>
