<template>
  <div
    class="flex flex-col bg-none lg:bg-brown-10 rounded-2xl max-w-[337px] px-10 py-10 lg:box-shadow items-center"
  >
    <div
      class="flex flex-col items-center justify-center rounded-full bg-none lg:bg-brown-20 h-[75px] w-[75px] -mt-20"
    >
      <nuxt-img
        preload
        format="webp"
        :height="isInfinity ? 45 : 35"
        :width="isInfinity ? 75 : 45"
        :src="props.icon"
        :alt="props.title"
      />
    </div>
    <p class="header-4 text-secondary my-4 lg:my-12">{{ props.title }}</p>
    <p class="body-3 text-grey-10">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { FeatureCardProps } from "@/components/Feature/interfaces/Card";

const isInfinity = computed((): boolean => props.title === "Unlimited Access");

const props = defineProps<FeatureCardProps>();
</script>

<style scoped>
.box-shadow {
  box-shadow: 0px 7.49999px 44.9999px rgba(38, 45, 118, 0.08);
}
</style>
