<template>
  <div
    class="flex flex-row justify-between -ml-8 -mt-4 lg:m-0 lg:pl-4 lg:pr-20"
  >
    <nuxt-img
      src="assets/images/logo-qinvi.png"
      alt="Qinvi Logo"
      height="210"
      width="210"
      class="-mt-10 -mb-20"
    />
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
