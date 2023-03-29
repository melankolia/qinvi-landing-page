<template>
  <div class="flex flex-row justify-between m-8 lg:my-8 lg:px-20">
    <p class="logo-text">QINVI</p>
    <div class="hidden lg:flex flex-row items-center space-x-14">
      <p
        class="caption-1 text-black-10 hover:cursor-pointer"
        @click="handleScroll('home')"
      >
        Home
      </p>
      <p
        class="caption-1 text-black-10 hover:cursor-pointer"
        @click="handleScroll('feature')"
      >
        Feature
      </p>
      <p
        class="caption-1 text-black-10 hover:cursor-pointer"
        @click="handleScroll('price')"
      >
        Price
      </p>
      <p
        class="caption-1 text-black-10 hover:cursor-pointer"
        @click="handleScroll('subscribe')"
      >
        Subscribe
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleScroll = (id: string): void => {
  const el = document.getElementById(id) as HTMLElement;
  el.scrollIntoView({
    inline: "nearest",
    behavior: "smooth",
    block: "start",
  });
};
</script>
